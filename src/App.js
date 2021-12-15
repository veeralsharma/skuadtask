import './App.scss';
import ProfileName from "./components/ItemRenderer/ProfileName"
import Category from "./components/ItemRenderer/Category"
import HiddenAction from "./components/ItemRenderer/HiddenAction"
import Invoice from "./components/ItemRenderer/Invoice"
import SelectRow from "./components/ItemRenderer/SelectRow"
import Status from "./components/ItemRenderer/Status"
import VisbleAction from "./components/ItemRenderer/VisbleAction"
import Table from './components/Table';

const headerData1 = [
  {label: 'Spender', name: 'spender_name', itemRenderer: ( value, item, index) => <ProfileName {...item} /> },
  {label: 'Expense Date', name: 'expense_date', itemRenderer: (value, item, index) => <h4>{value}</h4> },
  {label: 'Category', name: 'category', itemRenderer: ( value,item, index) => <Category {...item} /> },
  {label: 'Amount', name: 'amount', itemRenderer: ( value,item, index) => <h4>{value}</h4> },
  {label: 'Status', name: 'status', itemRenderer: ( value,item, index) => <Status {...item} /> },
  {label: '', name: 'action', itemRenderer: (value, item, index) => <VisbleAction {...item} /> },
]

//table data obtained from api call
const rowData1 = [
  {name: 'ABC DEF', url: 'https://lh3.googleusercontent.com/ogw/ADea4I7GGfkPBjCpHnaKlriy-9zq-Y2c4QqctgL_HhLyAQ=s32-c-mo', expense_date: '12 Dec,2021', category: 'Travel', amount: '40,123', status: 'Submitted'},
  {name: 'WQQ RRW', url: 'https://lh3.googleusercontent.com/ogw/ADea4I7GGfkPBjCpHnaKlriy-9zq-Y2c4QqctgL_HhLyAQ=s32-c-mo', expense_date: '14 Dec,2021', category: 'Meal', amount: '40,123', status: 'Due'},
  {name: 'ABC DEF', url: 'https://lh3.googleusercontent.com/ogw/ADea4I7GGfkPBjCpHnaKlriy-9zq-Y2c4QqctgL_HhLyAQ=s32-c-mo', expense_date: '20 Dec,2021', category: 'Other', amount: '40,123', status: 'Rejected'}

]

const headerData2 = [
  {label: '', name: '', itemRenderer: ( value, item, index) => <SelectRow {...item} /> },
  {label: 'Vendor', name: 'vendor', itemRenderer: (value, item, index) => <h4>{value}</h4> },
  {label: 'Invoice No', name: 'invoice_no', itemRenderer: ( value,item, index) => <Invoice {...item} /> },
  {label: 'Invoice Date', name: 'invoice_date', itemRenderer: ( value,item, index) => <h4>{value}</h4> },
  {label: 'Due Date', name: 'due_date', itemRenderer: ( value,item, index) => <h4>{value}</h4> },
  {label: 'Payment Date', name: 'payment_date', itemRenderer: (value, item, index) => <h4>{value}</h4> },
  {label: 'Invoice Amount', name: 'invoice_amount', itemRenderer: (value, item, index) => <h4>{value}</h4> },
  {label: 'Paid Amouont', name: 'paid_amount', itemRenderer: (value, item, index) => <h4>{value}</h4> },
  {label: 'Balance', name: 'balance', itemRenderer: (value, item, index) => <h4>{value}</h4> },
  {label: 'Status', name: 'status', itemRenderer: (value, item, index) => <Status {...item} /> },
  {label: '', name: 'action', itemRenderer: (value, item, index) => <HiddenAction {...item} /> },
]

//table data obtained from api call
const rowData2 = [
  {vendor: 'ABC DEF', invoice_no: '123 123 1', invoice_date: '12 Dec 2021', due_date: '12 Dec 2021',payment_date: '12 Dec 2021', invoice_amount:'123,123', paid_amount: '121,121', balance: '12,000', status:'Paid'},
  {vendor: 'WQQ RRW', invoice_no: '453263425 ', invoice_date: '12 Dec 2021',due_date: '12 Dec 2021',payment_date: '12 Dec 2021', invoice_amount:'123,123', paid_amount: '121,121', balance: '12,000', status:'Rejected'},
  {vendor: 'ABC DEF', invoice_no: '272563 34 ', invoice_date: '12 Dec 2021',due_date: '12 Dec 2021',payment_date: '12 Dec 2021', invoice_amount:'123,123', paid_amount: '121,121', balance: '12,000', status:'Due'}

]

//displaying both kind of table using single table component just using custom header/column data component
function App() {
  return (
    <div className="App">
      <Table columnData={headerData1} rowData={rowData1} />
      <Table columnData={headerData2} rowData={rowData2} />
    </div>
  );
}

export default App;
