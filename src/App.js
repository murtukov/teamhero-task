import './App.css';
import Table from "./components/Table/Table";
import StringField from "./components/Table/fields/StringField";
import TagsField from "./components/Table/fields/TagsField";
import testData from "./test-data";
import EmailField from "./components/Table/fields/EmailField";
import TagFilter from "./components/Table/TagFilter/TagFilter";
import TableProvider from "./components/Table/TableProvider";

function App() {
    return (
        <TableProvider data={testData}>
            <div className='container'>
                <div className='left-column'>
                    <TagFilter/>
                </div>
                <div className='right-column'>
                    <Table>
                        <StringField title='First Name' source='firstName' bold/>
                        <StringField title='Last Name' source='lastName' bold/>
                        <EmailField title='Email' source='email' />
                        <TagsField title='Skills' source='skills' />
                        <StringField title='Location' source='location' />
                    </Table>
                </div>
            </div>
        </TableProvider>
    );
}

export default App;
