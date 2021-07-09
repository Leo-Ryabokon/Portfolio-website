import "./portfolioList.scss"
const PortfolioList = ({title, setSelected, active, id}) => {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} id={id} onClick={() => setSelected(id)}>
            {title}
        </li>
    );
};

export default PortfolioList;