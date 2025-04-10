(function($) {
  'use strict';
  $(function() {

    if ($("#chart-sales").length) {
      const ctx = document.getElementById('chart-sales');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
              data: [0, 245, 75, 150, 100, 150, 50, 100],
              backgroundColor: [
                'rgba(235, 105, 143, .7)'
              ],
              borderColor: [
                '#eb698f'
              ],
              borderWidth: 1,
              fill: 'origin',
              label: "online",
              tension:.3,
            },
            {
              data: [0, 100, 200, 100, 150, 75, 200, 50],
              backgroundColor: [
                'rgba(119, 111, 249, .9)'
              ],
              borderColor: [
                '#776ff9'
              ],
              borderWidth: 1,
              fill: 'origin',
              label: "store",
              tension:.3,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .1,
            },
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              display:false,
              border: {
                display: false
              },
              grid: {
                display: true,
                drawTicks: true,
                color:"#e9e9e9",
              },
              ticks: {
                display:true,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            },
            y: {
              display:false,
              border: {
                display: false
              },
              grid: {
                display:true,
                color:"#e9e9e9",
              },
              ticks: {
                display:true,
                color:"#6c7383",
                font: {
                  size: 16,
                  weight: 300,
                }
              },
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart, args, options) {
              const chartId = chart.canvas.id;
              var i;
              const legendId = `${chartId}-legend`;
              const ul = document.createElement('ul');
              for(i=0;i<chart.data.datasets.length; i++) {
                  ul.innerHTML += `
                  <li>
                    <span style="background-color: ${chart.data.datasets[i].backgroundColor}"></span>
                    ${chart.data.datasets[i].label}
                  </li>
                `;
              }
              return document.getElementById(legendId).appendChild(ul);
            }
        }]
      });

    }

    if ($("#dashboard-monthly-analytics").length) {
      const ctx = document.getElementById('dashboard-monthly-analytics');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Arl', 'May', 'Jun', 'Jul', 'Aug'],
          datasets: [{
              label: "Ios",
              borderColor: 'rgba(77, 124, 255, .8)',
              backgroundColor: 'rgba(77, 124, 255, .8)',
              pointRadius: 0,
              fill: true,
              borderWidth: 1,
              fill: 'origin',
              data: [0, 0, 30, 0, 0, 0, 50, 0],
              tension:.4
            },
            {
              label: "Android",
              borderColor: 'rgba(235, 105, 143, .9)',
              backgroundColor: 'rgba(235, 105, 143, .9)',
              pointRadius: 0,
              fill: true,
              borderWidth: 1,
              fill: 'origin',
              data: [0, 35, 0, 0, 30, 0, 0, 0],
              tension:.4
            },
            {
              label: "Windows",
              borderColor: 'rgba(241, 155, 84, .8)',
              backgroundColor: 'rgba(241, 155, 84, .8)',
              pointRadius: 0,
              fill: true,
              borderWidth: 1,
              fill: 'origin',
              data: [0, 0, 0, 40, 10, 50, 0, 0],
              tension:.4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            x: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
                color:"#b8b8b8",
              },

              ticks: {
                display:true,
                color:"#696969",
                font: {
                  size: 12,
                  weight: 300,
                }
              },
            },
            y: {
              display:true,
              border: {
                display: false
              },
              grid: {
                display:true,
                color:"#b8b8b8",
              },
              ticks: {
                display:true,
                color:"#696969",
                font: {
                  size: 12,
                  weight: 300,
                },
                stepSize:20,
              },
              min: 0,
              max: 80,
            }
          },
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart, args, options) {
              const chartId = chart.canvas.id;
              var i;
              const legendId = `${chartId}-legend`;
              const ul = document.createElement('ul');
              for(i=0;i<chart.data.datasets.length; i++) {
                  ul.innerHTML += `
                  <li>
                    <span style="background-color: ${chart.data.datasets[i].backgroundColor}"></span>
                    ${chart.data.datasets[i].label}
                  </li>
                `;
              }
              return document.getElementById(legendId).appendChild(ul);
            }
        }]
      });

    }

    if ($("#traffic-chart").length) { 
      const ctx = document.getElementById('traffic-chart');

      var gradientStrokeBlue = document.getElementById("traffic-chart").getContext('2d');
      var gradientStrokeRed = document.getElementById("traffic-chart").getContext('2d');

      var gradientStrokeBlue = gradientStrokeBlue.createLinearGradient(0, 0, 0, 181);
      gradientStrokeBlue.addColorStop(0, '#6486fc');
      gradientStrokeBlue.addColorStop(1, '#0e4cfb');
      var gradientLegendBlue = 'linear-gradient(145deg, #6486fc, #0e4cfb)';

      var gradientStrokeRed = gradientStrokeRed.createLinearGradient(0, 0, 0, 150);
      gradientStrokeRed.addColorStop(0, 'rgba(238, 143, 154, 1)');
      gradientStrokeRed.addColorStop(1, 'rgba(233, 79, 133, 1)');
      var gradientLegendRed = 'linear-gradient(to right, rgba(238, 143, 154, 1), rgba(233, 79, 133, 1))';


      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Facebook','Google', 'Linkedin',],
          datasets: [{
            data: [40, 60],
            backgroundColor: [
              gradientStrokeBlue,
              gradientStrokeRed
            ],
            hoverBackgroundColor: [
              gradientStrokeBlue,
              gradientStrokeRed
            ],
            borderColor: [
              "#6486fc",
              "rgba(233, 79, 133, 1)"
            ],
            legendColor: [
              gradientLegendBlue,
              gradientLegendRed
            ]
          }]
        },
        options: {
          cutout: 80,
          animationEasing: "easeOutBounce",
          animateRotate: true,
          animateScale: false,
          responsive: true,
          maintainAspectRatio: true,
          showScale: true,
          legend: false,
          plugins: {
            legend: {
                display: false,
            }
          }
        },
        plugins: [
          {
          afterDatasetUpdate: function (chart, args, options) {
              const chartId = chart.canvas.id;
              var i;
              const legendId = `${chartId}-legend`;
              const ul = document.createElement('ul');
              for(i=0;i<chart.data.datasets[0].data.length; i++) {
                  ul.innerHTML += `
                  <li>
                  <h2 class="text-dark">${chart.data.datasets[0].data[i]} %</h2>
                    <span style="background-color: ${chart.data.datasets[0].borderColor[i]}"></span>
                    ${chart.data.labels[i]}
                  </li>
                `;
              }
              return document.getElementById(legendId).appendChild(ul);
            }
        },
        {
        beforeDraw: (chart) => {
          const width = chart.width;
          const height = chart.height;
          const ctx = chart.ctx;
          ctx.restore();
          const fontSize = (height / 200).toFixed(2);
          ctx.font = `${fontSize}em sans-serif`;
          ctx.textBaseline = "middle";
          const text = "12 M";
          ctx.fillStyle = 'gray';
          const textX = Math.round((width - ctx.measureText(text).width) / 2);
          const textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }

      ]
      });
    }


  });
})(jQuery);