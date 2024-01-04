$(document).ready(function () { // this function ensures all javascript will run AFTER everything else loads on the page.

  let dataSet1 = [1, 2, 3, 4, 5];
  let dataSet2 = [6, 7, 8, 9, 10];
  let dataSet3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let dataSet4 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  let dataSet5 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  let dataSet6 = [15523, 2334, 1733, 18855, 11388, 8334];

  let loadNewDataSet = (dataSet) => {

    //clear x-axis-numbers of <p> element. Note: probably need to clear y-axis-numbers and chart as well. Although, this command may interfere with stacking bar values.
    $('.chart').empty();
    let yMax = Math.max(...dataSet);//'...' prefix allows function to process dataset as a NUMBER instead of an OBJECT (note: using this for setting height)
    let columnWidth = 100 / (dataSet.length +1);
    let rowHeight = 100 / 11;
    let barHeight = 100 * 10 / 11;

    //insert y-axis labels
    $('.chart').append(`<div class = "y-axis"></div>`);
    for (let i = 0; i <= 10; i++){
      $('.y-axis').prepend(`<p>${i * yMax / 10}</p>`).css({'width':`${columnWidth}%`});
      $('.y-axis p').css({'height': `${rowHeight}%`,
                        //need to put code to justify content to the right
                        'padding-right': '10%'});
    }
    //each loop appends new bar in bar chart.
    for (let i = 1; i <= dataSet.length; i++) {

      $('.chart').append(`<div class = "bar${i}">
                            <p class = "element${i}">${dataSet[i-1]}</p>
                            <p class = "x-axis-${i}">${i}</p>
                          </div>`);

      $(`.bar${i}`).css({'width':`${columnWidth}%`});
      $(`.x-axis-${i}`).css({'height':`${rowHeight}%`});
      $(`.element${i}`).css({'height':`${barHeight * dataSet[i-1] / yMax}%`,
                              'background-color':'lightblue'});
    }


    // for () {
    //   $('.chart').append('<p>' + (i + 1) + '</p>');
    //   $('.chart').append('<p>' + dataSet[i] + '</p>');
    // }




  }




  loadNewDataSet(dataSet6);

});


