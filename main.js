$(document).ready(function () { // this function ensures all javascript will run AFTER everything else loads on the page.

  let dataSet1 = [1, 2, 3, 4, 5];
  let dataSet2 = [6, 7, 8, 9, 10];
  let dataSet3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let dataSet4 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  let dataSet5 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  let dataSet6 = [1523, 2334, 11021, 1750, 1388, 1334];

  let loadNewDataSet = (dataSet) => {

    //clear x-axis-numbers of <p> element. Note: probably need to clear y-axis-numbers and chart as well. Although, this command may interfere with stacking bar values.
    $('.chart').empty();

    //set useful variables
    let columnWidth = 100 / (dataSet.length +1);
    let rowHeight = 100 / 11;
    let barHeight = 100 * 10 / 11;
    //calculate useful variables
    let maxVal = Math.max(...dataSet).toString();
    let rVal = ((Number((Number(maxVal[0]) + 1).toString() + maxVal.slice(1)) > (Number(maxVal) * 1.25)) ? (Number(maxVal[0]) + 1).toString() + maxVal.slice(1) : maxVal[0] + '5' + maxVal.slice(2))
    alert(rVal);
    let rDigits1 = ((Number(maxVal.slice(1,2)) >= 5) ? (Number(maxVal.slice(0,1)) + 1).toString() + '0' : maxVal.slice(0,1) + '5')
    let yMax = Number(rDigits.toString() + '0'.repeat(maxVal.slice(2).length));
    //'...' prefix allows function to process dataset as a NUMBER instead of an OBJECT (note: using this for setting height)



    //insert bar that serves as y-axis labels
    $('.chart').append(`<div class = "y-axis"></div>`);
    for (let i = 0; i <= 10; i++){
      $('.y-axis').prepend(`<p>${i * yMax / 10}</p>`).css({'width':'5rem',
                                                            'padding-right': '1%'});
      $('.y-axis p').css({'height': `${rowHeight}%`
                        //need to put code to justify content to the right
                        });
    }

    //each loop appends new bar in bar chart.
    for (let i = 1; i <= dataSet.length; i++) {
      //create html structure for each bar
      $('.chart').append(`<div class = "bar${i}">
                            <p class = "element${i}">${dataSet[i-1]}</p>
                            <p class = "x-axis-${i}">${i}</p>
                          </div>`);
      //set css for each bar element, including bar height
      $(`.bar${i}`).css({'width':`${columnWidth}%`});
      $(`.x-axis-${i}`).css({'height':`${rowHeight}%`,
                              'border-top':'0.05rem solid black'});
      $(`.element${i}`).css({'height':`${barHeight * dataSet[i-1] / yMax}%`,
                              'background-color':'lightblue'});
    }


    // for () {
    //   $('.chart').append('<p>' + (i + 1) + '</p>');
    //   $('.chart').append('<p>' + dataSet[i] + '</p>');
    // }




  }




  loadNewDataSet(dataSet6);

}); //do not put any code below this point, or it may run before the document is ready


