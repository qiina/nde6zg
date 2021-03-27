import {useEffect, useState} from 'react'

interface Error {
    message: string
}

function AjaxTest() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://script.google.com/macros/s/AKfycbwCmLTsOL-riVDPg5tjypsEoE6phb_hv4AWZxt9zu8ym_1h0Ud02dBmEfbXLqXLehZu/exec")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result.fileList)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    return (
        <div>
            <p>ajaxtest</p>
        </div>
    )

}
export default AjaxTest;