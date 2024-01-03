$(document).ready(function () { // this function ensures all javascript will run AFTER everything else loads on the page.

  let dataSet1 = [1, 2, 3, 4, 5];
  let dataSet2 = [6, 7, 8, 9, 10];
  let dataSet3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let dataSet4 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  let dataSet5 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  let loadNewDataSet = (dataSet) => {

    //clear x-axis-numbers of <p> element. Note: probably need to clear y-axis-numbers and chart as well. Although, this command may interfere with stacking bar values.
    $('.chart').empty();
    let yMax = Math.max(...dataSet);//'...' prefix allows function to process dataset as a NUMBER instead of an OBJECT (note: using this for setting height)
    let columnWidth = 100 / dataSet.length;
    let rowHeight = 100 / 11;

    //insert y-axis labels
    $('.chart').append(`<div class = "y-axis"></div>`);
    for (let i = 0; i <= 10; i++){
      $('.y-axis').prepend(`<p>${i}</p>`).css({'width':`${columnWidth}%`});
      $('.y-axis p').css({'height': `${rowHeight}%`,
                        //need to put code to justify content to the right
                        'padding-right': '10%',
                        'background-color': 'red'});
    }
    //each loop appends new bar in bar chart.
    for (let i = 1; i <= dataSet.length; i++) {
      $('.chart').append(`<div class = "bar${i}"><p>${dataSet[i-1]}</p><p>${i}</p></div>`);
      $(`.bar${i}`).css({'width':`${columnWidth}%`});
    }


    // for () {
    //   $('.chart').append('<p>' + (i + 1) + '</p>');
    //   $('.chart').append('<p>' + dataSet[i] + '</p>');
    // }




  }




  loadNewDataSet(dataSet4);

});


