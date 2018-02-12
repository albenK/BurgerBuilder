/* 
    ABOUT ME: The purpose of this file is to have a wrapper element for our components we use
    throughout the app. React forces us to use one root element within the render() method 
    for our components, so we use this Auxiliary component instead of a div or an array.
*/

const Auxiliary = (props) => props.children;

export default Auxiliary;