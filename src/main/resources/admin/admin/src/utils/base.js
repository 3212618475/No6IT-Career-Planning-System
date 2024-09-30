const base = {
    get() {
        return {
            url : "http://localhost:8080/itzhiyeshengyaguihua/",
            name: "itzhiyeshengyaguihua",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/itzhiyeshengyaguihua/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "it职业生涯规划系统"
        } 
    }
}
export default base
