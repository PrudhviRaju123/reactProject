var React= requrie ('react');
var ListItem = React.createClass({
    render:function(){
        return (
              <li>
                <h4>{this.props.ingredient}</h4>
              </li>
         );
    }
});
module.exports=ListItem;
