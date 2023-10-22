import React, { useState } from 'react';
import "./OrderBooking.scss"; // Import the SCSS file
import DataTable from 'react-data-table-component';


const OrderBooking = () => {
    // // Sample dummy data
    // const orders = [
    //     { id: 1, productName: 'Product A', quantity: 5, price: 10.00 },
    //     { id: 2, productName: 'Product B', quantity: 3, price: 15.00 },
    //     { id: 3, productName: 'Product C', quantity: 2, price: 20.00 },
    // ];

    // return (
    //     <div className="order-booking"> {/* Use the class name for styling */}
    //         <h2>Order Booking</h2>
    //         <ul>
    //             {orders.map(order => (
    //                 <li key={order.id}>
    //                     <p>Product: {order.productName}</p>
    //                     <p>Quantity: {order.quantity}</p>
    //                     <p>Price: ${order.price}</p>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    const column =[
            {
                name: 'Suplier Name',
                selector: row => row.name,
                sortable: true
            },
            {
                name: 'Product',
                selector: row => row.product,
                sortable: true
            },
            {
                name: 'Quntity',
                selector: row => row.quntity,
                sortable: true
            },
            {
                name: 'Price',
                selector: row => row.price,
                sortable: true
            },
            {
                name: 'Stage',
                selector: row => row.stage,
                sortable: true
            }
    ];
    const data =[
        {
            id: 1,
            name:'Praneeth',
            product:'Cement',
            quntity:40,
            price:"400.000",
            stage:"Approved",
        },
        {
            id: 2,
            name:'Dilshan',
            product:'Cement',
            quntity:40,
            price:"400.000",
            stage:"Rejected",
        },
        {
            id: 1,
            name:'Perera',
            product:'Sand',
            quntity:2,
            price:"40.000",
            stage:"Approved",
        },
        {
            id: 1,
            name:'Hansaka',
            product:'Chips',
            quntity:4,
            price:"60.000",
            stage:"Approved",
        },
        {
            id: 1,
            name:'Jayadinu',
            product:'Binding',
            quntity:4,
            price:"20.000",
            stage:"Pending",
        },
        {
            id: 1,
            name:'Heshan',
            product:'Chips',
            quntity:40,
            price:"400.000",
            stage:"Rejected",
        },
        {
            id: 1,
            name:'Isuru',
            product:'Cement',
            quntity:40,
            price:"400.000",
            stage:"Rejected",
        },
        {
            id: 1,
            name:'Shanuka',
            product:'Cement',
            quntity:40,
            price:"400.000",
            stage:"Approved",
        },
        {
            id: 1,
            name:'Zakey',
            product:'Cement',
            quntity:40,
            price:"400.000",
            stage:"Pending",
        },
        {
            id: 1,
            name:'Dushan',
            product:'Cement',
            quntity:40,
            price:"400.000",
            stage:"Approved",
        },

    ]

    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    }

    return (
        <div className='container mt-5'>
            <div className='text-end'><input type="text" onChange={handleFilter} /></div>
            <DataTable
                columns={column}
                data={records}
                selectableRows
                fixedHeader
                pagination
            ></DataTable>
        </div>
    );
}

export default OrderBooking;