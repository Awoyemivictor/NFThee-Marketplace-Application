import { AccordionCard, CheckBox } from "../../Components";

export const activity = [
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
  {
    activity: "Sale",
    name: "Monster Ape #6044",
    price: "2.59",
    price_constantc: "$52547.30",
    quantity: "1",
    from: "Speed_Squp",
    to: "Pixl-collection",
    time: new Date(),
  },
];

export const event_type = [
  {
    name: "Listing",
    value: "listing",
    img: "assets/images/icons/all_item.png"

  },
  {
    name: "Bids",
    value: "bids",
    img: "assets/images/icons/bidding.png"

  },
  {
    name: "Sales",
    value: "sales",
    img: "assets/images/icons/sale.png"

  },
  {
    name: "Traders",
    value: "traders",
    img: "assets/images/icons/traders.png"

  },
];

export const chains = [
  {
    name: "Ethereum",
    value: "ethereum",
    img: "assets/images/icons/ethereum_select.png"
  },
  {
    name: "Solana",
    value: "Solana",
    img: "assets/images/icons/solana_select.png"
  },
  {
    name: "Binance",
    value: "kalythan",
    img: "assets/images/icons/binance_select.png"
  },
];

const chains_container = () => {
  return (
    <>
      {chains.map((item) => (
        <CheckBox {...item} />
      ))}
    </>
  );
};

const event_type_container = () => {
  return (
    <>
      {event_type.map((item) => (
        <CheckBox {...item} />
      ))}
    </>
  );
};

export const filter_card = [
  {
    name: "Event Type",
    value: "event_type",
    childern: event_type_container(),
  },
  {
    name: "Chains",
    value: "chains",
    childern: chains_container(),
  },
];

export const List = ({ activity, name, price, nftId, from, to }) => {
  return (
    <tr>
      <td>
        <img src="assets/images/icons/cart.png" alt="" className="me-1" />
        {activity}
      </td>
      <td>
        <div className="d-flex align-items-center">
          <img src="assets/images/avt-5.jpg" alt="" className="user-img" />
          <span className="ms-2">{name}</span>
        </div>
      </td>
      <td>
        <div className="price-detail">
          <h5>
            <img
              src="assets/images/icons/ethereum.png"
              alt=""
              className="me-1"
            />
            {price}
          </h5>
          <h6>{'price_constantc'}</h6>
        </div>
      </td>
      <td>1</td>
      <td>
        <span className="text-color-purple">{from}</span>
      </td>
      <td>
        <span className="text-color-purple">{to}</span>
      </td>
      <td>
        <a href="#">
          43 Seconds Ago
          <img
            src="assets/images/icons/share-icon.png"
            alt=""
            className="ms-1"
          />
        </a>
      </td>
    </tr>
  );
};

export const AccordionCards1 = () => {
  return <AccordionCard cards={filter_card} />;
};
