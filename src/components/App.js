import './App.css';
import Table from "./Table/Table";
import StringField from "./Table/fields/StringField";
import TagsField from "./Table/fields/TagsField";
import testData from "../test-data";
import EmailField from "./Table/fields/EmailField";
import TagFilter from "./Table/TagFilter/TagFilter";
import TableProvider from "./Table/TableProvider";
import ImageField from "./Table/fields/ImageField";
import IconsField from "./Table/fields/IconsField";

function App() {
    return (
        <TableProvider data={testData}>
            <div className='container'>
                <div className='left-column'>
                    <TagFilter/>
                </div>
                <div className='right-column'>
                    <Table>
                        <ImageField title={null} source='avatar' />
                        <StringField title='First Name' source='firstName' bold/>
                        <StringField title='Last Name' source='lastName' bold/>
                        <EmailField title='Email' source='email' />
                        <TagsField title='Skills' source='skills' />
                        <IconsField title='Todos' source='todos'/>
                        <StringField title='Location' source='location' />
                    </Table>
                </div>
            </div>
        </TableProvider>
    );
}

export default App;
