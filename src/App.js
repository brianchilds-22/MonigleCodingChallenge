import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://api.openbrewerydb.org/breweries?by_state=colorado')
    .then(res => res.json())
    .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
    });
    
  }

  render() {

    const { isLoaded, items } = this.state;
    // const sorting = item.sort((a,b) =>)
    

    if(!isLoaded) {
      return <div>Loading..</div>;
    } else {

      return (
         <div className="container">
              <table className='table table-bordered'>
                <thead>
                  <th>Name</th>
                  <th>Street</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Phone</th>
                  </thead>
                  <tbody>

                  {items.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.street}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                      <td>{item.phone}</td>
                    </tr>
                  ))}
                  </tbody>
              </table>
         </div>
        
       );
    }
    }
  }


export default App;
