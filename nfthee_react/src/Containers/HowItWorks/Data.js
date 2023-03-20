import { AccordionCard } from "../../Components";
import "./data.css";

const value = {
  name: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged It Was Popularised In The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop Publishing Software Like Aldus Pagemaker Including Versions Of Lorem Ipsum",
  value:
    "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged It Was Popularised In The 1960S With The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop Publishing Software Like Aldus Pagemaker Including Versions Of Lorem Ipsum",
};

const value_container = () => {
  return <>{value.name}</>;
};

const string_container = (text) => {
  return (
    <ul>
      <li><p>{text}</p></li>
    </ul>
  );
};

const filter_card = [
  {
    name: string_container("Purchasing Process"),
    value: "puchasing_process",
    childern: value_container(),
  },
  {
    name: string_container("How Secure Are Your Payment Information"),
    value: "how_secure_are_your_payment_information",
    childern: value_container(),
  },
  {
    name: string_container("How to apply for a prepaid card?"),
    value: "how_to_apply_for_a_prepaid_card?",
    childern: value_container(),
  },
  {
    name: string_container("How Secure Is My Data In App?"),
    value: "how_secure_is_my_data_in_app",
    childern: value_container(),
  },
  {
    name: string_container("How Do I Known Of I Have Latest Version?"),
    value: "how_tdo_i_know_of_i_have_latest_version",
    childern: value_container(),
  },
  {
    name: string_container("Download Oflline & Documentation"),
    value: "download_offline_documentation",
    childern: value_container(),
  },
];

export const AccordionCards = () => {
  return <AccordionCard cards={filter_card} />;
};
