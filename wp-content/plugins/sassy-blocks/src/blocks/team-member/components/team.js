const { Component } = wp.element;

export default class TeamMember extends Component{
    constructor( props ){
        super( ...arguments );
    }

    render(){
        const { attributes:{ align, imageShape}, className, attributes } = this.props;
        return(
            <div className={ className + ' ' + align + ' ' + imageShape}>
                { this.props.children }
            </div>
        );
    }
}