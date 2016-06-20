var HelloWord = React.createClass({
    render: function(){
        return (
            <p>Hello word, <span className='label label-primary'>{this.props.name}</span></p>
        );
    }
});

ReactDOM.render(
    <HelloWord name='Douglas Bastos'/>,
        document.getElementById('main')
);