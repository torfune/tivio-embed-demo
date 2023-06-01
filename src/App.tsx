import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`

function App() {
    return (
        <Container>
            <h2>Postup pro implementaci</h2>
            <ul>
                <li>Vložit následující kód na místo, kde se má zobrazit player</li>
                <li>Na stránce kam se kód vloží musí být naimplenetovány globální funkce "getPreRollUrl" a
                    "getMidRollUrl"
                </li>
            </ul>

            <iframe scrolling="no" title="Untitled" style={{width: '100%', height: '900px'}}
                    src="https://codepen.io/torfune/embed/mdzZoPp?default-tab=html&theme-id=dark"
                    frameBorder="no">
            </iframe>
        </Container>
    )
}

export default App
