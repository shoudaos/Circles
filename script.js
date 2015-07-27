$(document).ready(function(){
    var data=[40,80,120];
    var i = 120;
    var circle=d3.select('svg').selectAll('circle');
    $('#add').click(function(event){

        i+=40;
        data.push(i);
        circle.data(data).enter().append('circle')
            .attr("cy", 60)
            .attr("r",0)
            .attr("cx", function(d){return d})
            .transition()
            .attr("r",10)
            .duration(2000);
        event.preventDefault();
    })
});