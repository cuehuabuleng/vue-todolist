import './footer.styl'
export default {
    data(){
        return{
            author:'jack'
        }
    },
    render(){
        return(
            <div id="footer">
                <span>Write by {this.author}</span>
            </div>
        )
    }
}