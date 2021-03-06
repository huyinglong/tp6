function line(){
    var data = [220, 182, 191, 234, 190, 330, 310,50,200];
    var markLineData = [];
    for (var i = 1; i < data.length; i++) {
        markLineData.push([{
            xAxis: i - 1,
            yAxis: data[i - 1],
            value: (data[i] + data[i-1]).toFixed(2)
        }, {
            xAxis: i,
            yAxis: data[i]
        }]);
    }

    //option
    option = {
        title: {
            text: 'Awesome Chart',
            show:false
        },
        tooltip : {
            trigger: 'axis'
        },    
        xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {},
        series: [{
            type: 'line',
            data:data,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                smooth: true,
                        effect: {
                            show: true
                        },
                        distance: 10,
                label: {
                    normal: {
                        position: 'middle'
                    }
                },
                symbol: ['none', 'none'],
                data: markLineData
            }
        }]
    };

    return option;
}


function nice(day,val1,val2,val3){
        option = {
        title: {
            text: '折线图堆叠',
            show:false
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['信息发布量','访问量','点击量']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: day
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'信息发布量',
                type:'line',
                stack: '总量',
                data:val1
            },
            {
                name:'访问量',
                type:'line',
                stack: '总量',
                data:val2
            },
            {
                name:'点击量',
                type:'line',
                stack: '总量',
                data:val3
            }
        ]
    };


    return option;
}


function nice1(day,values){
        option = {
        color: ['#3398DB'],
        title: {
            text: '折线图堆叠',
            show:false
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:[],
            show:false
          
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: day
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'信息发布量',
                type:'line',
                stack: '总量',
                data:values
            }
        ]
    };


    return option;
}

function nice2(){
    option = {
        title: {
            text: '堆叠区域图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {},
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    return option;
}

function bar(day,values){
        option = {
        color: ['#86D560'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : day,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'访问',
                type:'bar',
                barWidth: '60%',
                data:values
            }
        ]
    };

    return option;
}



function bar2(day,values){
        option = {
        title: {
            text: '折线图堆叠',
            show:false
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:[],
            show:false
          
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: day
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'今日点击量',
                type:'line',
                stack: '总量',
                 itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
                },
                data:values
            }
        ]
    };


    return option;
}