'use strict';

//* 导航数据，允许同一个状态出现在多个组下，在大型项目中可以扩展出roles等选项，来决定其可见性
English.constant('NavData', [
    {
        label: '首页',
        items: [
            {
                state: 'home',
                label: '首页',
                description: 'index'
            },
            {
                state: 'course',
                label: '我的课案'
            },
            {
                state: 'studio',
                label: '视听室'
            },
             {
                state: 'app',
                label: '应用'
            }
        ]
    },
    {
        label: 'courseHome',
        items: [
            {
                state: 'course.unit',
                label: 'Unit 1',
                content: 'Friends',
                items: [{
                        id: 'a',
                        content: 'Amy is taller',
                        veiws:'',
                        controller: ""
                    },
                    {
                        id: 'b',
                        content: 'Be careful2'
                    },

                    {
                        id: 'c',
                        content: 'Be careful3'
                    }
                ]
            }
        ]
    },
    {
        label: 'course',
        items: [
            {
                state: 'course.courseID.listen',
                label: 'A',
                content: 'Look and Listen',
                items: [{
                        id: 'a',
                        content: 'Be careful1',
                        views: {
                            "brief@":  {templateUrl:'views/course/home/brief.html'},
                            "content@": {
                                templateUrl:'views/course/listen/video.html',
                                //controller: 'testCtrl'
                            }
                        }   
                    },
                    {
                        id: 'b',
                        content: 'Be careful2',                  
                    },
                    {
                        id: 'c',
                        content: 'Be careful3'                 
                    }
                ]
            },
            {
                state: 'course.courseID.act',
                label: 'B',
                content: 'Listen and Act',
                items: [{
                    id: 'd',
                    state: 'course.act.videoID',
                    content: 'Be careful'
                    },
                    {
                    id: 'e',
                    state: 'course.act.videoID',
                    content: 'Be careful'
                    },
                    {
                        id: 'f',
                    state: 'course.act.videoID',
                    content: 'Be careful'
                    }
                ]
            },
            {
                state: 'course.courseID.Say',
                label: 'C',
                content: 'Listen and Say',
                items: [{
                    id: 'g',
                    state: 'course.Say.videoID',
                    content: 'Don’t tuch the ...' 
                    },
                    {
                        id: 'h',
                    state: 'course.Say.videoID',
                    content: 'Be careful',
                    views: {
                            "brief@":  {templateUrl:'views/course/home/brief.html'},
                            "content@": {
                                templateUrl:'views/course/say/cpractice.html',
                                //controller: 'testCtrl'
                            }
                        }  
                    },
                    {
                        id: 'i',
                    state: 'course.Say.videoID',
                    content: 'Be careful'
                    }
                ]
            },
            {
                state: 'course.courseID.Exercise',
                label: 'D',
                content: 'Exercise',
                items: [{
                    id: 'j',
                    state: 'course.Exercise.videoID',
                    content: 'Be careful'
                    },
                    {
                        id: 'k',
                    state: 'course.Exercise.videoID',
                    content: 'Be careful',
                    views: {
                            "brief@":  {templateUrl:'views/course/home/brief.html'},
                            "content@": {
                                templateUrl:'views/course/exercise/Dexercise.html',
                                //controller: 'testCtrl'
                            }
                        } 
                    },
                    {
                        id: 'l',
                    state: 'course.Exercise.videoID',
                    content: 'Be careful'
                    }
                ]
            },
            {
                state: 'course.courseID.write',
                label: 'E',
                content: 'Listen and Write',
                items: [{
                    id: 'm',
                    state: 'course.write.write',
                    content: 'To be best',
                    views: {
                            "brief@":  {templateUrl:'views/course/home/brief.html'},
                            "content@": {
                                templateUrl:'views/course/write/write.html',
                                //controller: 'testCtrl'
                            }
                        }
                    },
                    {
                        id: 'n',
                    state: 'course.write.videoID',
                    content: 'Be careful',
                    views: {
                            "brief@":  {templateUrl:'views/course/home/brief.html'},
                            "content@": {
                                templateUrl:'views/course/write/write2.html',
                                //controller: 'testCtrl'
                            }
                        }
                    },
                    {
                        id: 'o',
                    state: 'course.write.videoID',
                    content: 'Be careful'
                    }
                ]
            }
        ]
    }

]);