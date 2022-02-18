import './Footer.css';

export default function Footer(props) {
    const db = props.db || 3;
    const bold = props.bold || false;
    const listaElemek = [];
    for (let i = 0; i < db; i++) {
        listaElemek.push(<li><a href='#root'>Link{i+1}</a></li>);
    }
    return (
    <footer style={bold ? {fontWeight : 'bold'} : null}>
      <ul>
        {listaElemek}
      </ul>
    </footer>
    );
}