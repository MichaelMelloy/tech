exports.changePage = (val) =>
{
    let thingy = document.getElementsByClassName("transitionBody")[0].style
    thingy.display = "block"
    thingy.opacity = 1
    setTimeout(() => {
    thingy.top = "0%"
        setTimeout(() => {
            console.log("helo")
            this.props.setPage(val); 
            document.getElementsByClassName("transitionBody")[0].style.top = "-100%"
            setTimeout(() => {
                thingy.top = "100%"
                thingy.display = "none"
            },1000)
        }, 1000)
    }, 100)
}