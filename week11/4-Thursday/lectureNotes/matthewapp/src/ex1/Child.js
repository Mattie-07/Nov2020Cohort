import GrandChild from './Grandchild'


function Child(props){
    return(
        <div> 
            This is from the child of {props.parent}
            <GrandChild name="Ash"/>
        </div>
    )
}
export default Child