import React from 'react';
import *as d3 from 'd3';
import './Graph.css';

class Graph extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            graphIsVisible: false,
        }
    }

    refresh() {
        setInterval(function () {
            //   alert("Hello"); 
            window.location.reload(false);
        }, 300000); //refresh de 5 em 5 mins
        // }, 5000); //refresh de 5 em 5 segs, para teste 
    }

    componentDidMount() {
        this.getData();
        this.refresh();
    }

    getData = () => {
        console.log('d3json');
        let url = 'https://simulador.glitch.me/api/database/get-results?';
        d3.json(url)
            .then(data =>
                this.setState({
                    data: data,
                })          
            ).then(() => {
                this.draw();
            }).then(
                this.setState({
                 graphIsVisible: true,
                })
            ).catch(error => {
               console.log(error); //ver se dá pa prox
              });
    }


    draw = () => {
        const data = this.state;
        const w = 300;
        const h = 300;
        const candidates = [];
        const svg = d3.select("#graph")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(data.data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - (3 * d.Votação) - 150)
            .attr("width", 30)
            .attr("height", (d, i) => 3 * d.Votação)
            .attr("fill", "navy")
            .attr("stroke", "#000000")
            .style("fill", function (d) {
                if (d.Votação < 5) return '#ff3333';
                if (d.Votação >= 5 && d.Votação < 8) return '#ff8080';
                if (d.Votação >= 8 && d.Votação < 10) return '#ffe6e6';
                if (d.Votação >= 10 && d.Votação < 12) return '#ffc299';
                if (d.Votação >= 12 && d.Votação < 14) return '#ccff66';
                if (d.Votação >= 14 && d.Votação < 16) return '#85e085';
                if (d.Votação >= 16 && d.Votação < 20) return '#80d4ff';
                if (d.Votação >= 20 && d.Votação < 22) return '#ffb3ff';
                if (d.Votação >= 22 && d.Votação < 25) return '#ff99cc';
                if (d.Votação >= 25 && d.Votação < 28) return '#00cccc';
                if (d.Votação >= 28 && d.Votação < 32) return '#cceeff';
                return '#e600e6'; 
            });

        svg.selectAll("text")
            .data(data.data)
            .enter()
            .append("text")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - (3 * d.Votação) - 153) //+70 do q o original
            .text((d) => d.Votação)

        data.data.map(function (elem) {
            // console.log(elem['Candidato'])
            candidates.push(elem['Candidato']);
            return 'ok';

        })
        // console.log(candidates, ' array de candis');


        var x = d3.scaleBand()
            .domain(candidates)
            .rangeRound([0, w])
            .padding(0);

        svg.append("g")
            .attr("transform", "translate(0,150)")  //-70 do q o original
            .attr("color", "black")
            .call(d3.axisBottom(x))

            .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(90)")
            .style("font-family", 'Calibri Light')
            .style("font-size", '18px')
            .style("text-anchor", "start");


    }


    render() {

        return (

            <div className='d-flex justify-content-center col-12' id="ecra-graf">
                <div className='row'>


                    {this.state.graphIsVisible ?

                        <div id="graph"></div>

                        :

                        <div id="notloaded"> Por favor aguarde.</div>
                    }




                </div>

            </div>

        )
    }


}

export default Graph;