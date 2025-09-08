/**
 * @author : 김형일
 * @version : 1.0.0
 * @package :
 * @fileName : yearSelector.js
 * @date : 2025-09-02 오후 1:00
 * @description :
 * flatpickr Year Selector Plugin (년도만 선택할 수 있는 플러그인 )
 * monthSelector 에서 Custom 함
 * ========================================================================
 * DATE              AUTHOR              NOTE
 * ========================================================================
 * 2025-09-02       김형일               최초 생성
 */
function yearSelectPlugin(pluginConfig) {
  const config = {
    dateFormat: "Y",
    altFormat: "Y",
    theme: "light",
    maxRangeLength: null,
    ...pluginConfig,
  };

  return function (fp) {
    let yearContainer;
    let yearElements = [];
    let selectedYears = fp.config.defaultDate || [];

    // 년도 범위 설정
    const currentYear = new Date().getFullYear();
    const startYear = config.minDate
      ? new Date(config.minDate).getFullYear()
      : currentYear - 50;
    const endYear = config.maxDate
      ? new Date(config.maxDate).getFullYear()
      : currentYear + 50;

    function createYearSelector() {
      yearContainer = fp._createElement("div", "flatpickr-year-selector");

      // 년도 그리드 생성
      const yearGrid = fp._createElement("div", "year-grid");

      for (let year = startYear; year <= endYear; year++) {
        const yearElement = fp._createElement("span", "year-item");
        yearElement.textContent = year;
        yearElement.setAttribute("data-year", year);

        // 현재 년도 표시
        if (year === currentYear) {
          yearElement.classList.add("today");
        }

        yearElement.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          selectYear(year, yearElement);
        });

        yearElements.push(yearElement);
        yearGrid.appendChild(yearElement);
      }

      yearContainer.appendChild(yearGrid);

      return yearContainer;
    }

    function selectYear(year, element) {
      if (fp.config.mode === "range") {
        selectYearRange(year, element);
      } else {
        selectSingleYear(year, element);
      }
    }

    function selectSingleYear(year, element) {
      // 이전 선택 제거
      yearElements.forEach((el) => el.classList.remove("selected"));

      // 새로운 선택 적용
      element.classList.add("selected");
      selectedYears = [year];

      // 날짜 설정
      const selectedDate = new Date(year, 0, 1);
      fp.setDate(selectedDate, true);
      fp.close();
    }

    function selectYearRange(year, element) {
      if (selectedYears.length === 0) {
        // 첫 번째 년도 선택
        element.classList.add("selected", "range-start");
        selectedYears = [year];
      } else if (selectedYears.length === 1) {
        // 두 번째 년도 선택
        const startYear = selectedYears[0];
        const endYear = year;

        // 범위 정렬
        let minYear = Math.min(startYear, endYear);
        let maxYear = Math.max(startYear, endYear);

        // 최대 범위 제한
        if (config.maxRangeLength) {
          if (maxYear - minYear > config.maxRangeLength) {
            if (startYear === minYear)
              maxYear = minYear + config.maxRangeLength;
            if (startYear === maxYear)
              minYear = maxYear - config.maxRangeLength;
          }
        }

        // 이전 선택 제거
        yearElements.forEach((el) => {
          el.classList.remove(
            "selected",
            "range-start",
            "range-end",
            "in-range"
          );
        });

        // 범위 표시
        yearElements.forEach((el) => {
          const elYear = parseInt(el.getAttribute("data-year"));
          if (elYear === minYear) {
            el.classList.add("selected", "range-start");
          } else if (elYear === maxYear) {
            el.classList.add("selected", "range-end");
          } else if (elYear > minYear && elYear < maxYear) {
            el.classList.add("in-range");
          }
        });

        selectedYears = [minYear, maxYear];

        // 날짜 설정
        const startDate = new Date(minYear, 0, 1);
        const endDate = new Date(maxYear, 11, 31);
        fp.setDate([startDate, endDate], true);

        // 입력 필드에 사용자 정의 형식으로 표시
        if (fp.altInput) {
          fp.altInput.value = `${minYear} ~ ${maxYear}`;
        } else {
          fp.input.value = `${minYear} ~ ${maxYear}`;
        }

        fp.close();
      } else {
        // 새로운 선택 시작
        yearElements.forEach((el) => {
          el.classList.remove(
            "selected",
            "range-start",
            "range-end",
            "in-range"
          );
        });
        element.classList.add("selected", "range-start");
        selectedYears = [year];
      }
    }

    function updateSelectedYears() {
      if (!fp.selectedDates.length) return;

      yearElements.forEach((el) => {
        el.classList.remove("selected", "range-start", "range-end", "in-range");
      });

      if (fp.config.mode === "range" && fp.selectedDates.length === 2) {
        const startYear = fp.selectedDates[0].getFullYear();
        const endYear = fp.selectedDates[1].getFullYear();

        yearElements.forEach((el) => {
          const elYear = parseInt(el.getAttribute("data-year"));
          if (elYear === startYear) {
            el.classList.add("selected", "range-start");
          } else if (elYear === endYear) {
            el.classList.add("selected", "range-end");
          } else if (elYear > startYear && elYear < endYear) {
            el.classList.add("in-range");
          }
        });
      } else if (fp.selectedDates.length === 1) {
        const selectedYear = fp.selectedDates[0].getFullYear();
        yearElements.forEach((el) => {
          if (parseInt(el.getAttribute("data-year")) === selectedYear) {
            el.classList.add("selected");
          }
        });
      }
    }

    return {
      onReady: function () {
        // 기본 달력 숨기기
        fp.calendarContainer.querySelector(".flatpickr-months").style.display =
          "none";
        fp.calendarContainer.querySelector(".flatpickr-days").style.display =
          "none";

        // 년도 선택기 추가
        const yearSelector = createYearSelector();
        fp.calendarContainer.appendChild(yearSelector);

        // 초기 선택 상태 업데이트
        updateSelectedYears();
      },

      onChange: function () {
        updateSelectedYears();
      },
    };
  };
}
