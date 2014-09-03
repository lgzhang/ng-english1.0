'use strict';

//* 导航数据，允许同一个状态出现在多个组下，在大型项目中可以扩展出roles等选项，来决定其可见性
English.constant('RouteConfig', [
    {
        name: 'course',
        url:"/course",
        views: {
            "leftbar": {
                templateUrl:'views/course/home/courseNav.html',
                controller: 'courseNavCtrl'
            },
            "brief":  {templateUrl:'views/course/home/brief.html'},
            "content": {templateUrl:'views/course/home/courseHome.html'},
        }
    },   
    {   name: 'course.courseID',
        url:"/courseID",
        views: {
            "leftbar@": {
                templateUrl:'views/course/home/navleft.html',
                controller: 'navleftCtrl'
            },
            "brief@":  {templateUrl:'views/course/home/brief.html'},
            "content@": {templateUrl:'views/course/write/write.html'},
        }   
    }  
]);