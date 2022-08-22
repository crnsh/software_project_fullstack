import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class GraphComponent extends Component { 

  constructor(props) {
      super(props)
      this.state = {
          tweetCount: []
      }
  }

  componentDidMount() {
      fetch('/tweets/vis-1/Russia')
          .then(res => res.json())
          .then(tweets => {
              this.setState({ tweetCount: tweets })
          })
  }

  render() {
      return (
          <ResponsiveContainer className="responsive-container-chart" width="50%" height="50%">
              <BarChart className="barchart" data={this.state.tweetCount}>
                  <Bar dataKey="count"/>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis name="Date" dataKey="date" />
                  <YAxis name="Date" dataKey="count"/>
                  <Tooltip />
                  <Legend />
              </BarChart>
          </ResponsiveContainer>
      )
  }

}

export default GraphComponent