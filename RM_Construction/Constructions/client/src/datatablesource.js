
/////////////////////////////////////////////////////////////////////////////booking
export const userColoumnsBK = [
  {
    field: "user",
    headerName: "Book",
    width: 60,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "ID",
    headerName: "ID",
    width: 90,
  },
  {
    field: "name",
    headerName: "Name",
    width: 90,
  },
  {
    field: "phone",
    headerName: "Phone No",
    width: 150,
  },
  {
    field: "address1",
    headerName: "Address",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "checkin",
    headerName: "Allowing Date",
    width: 180,
  },
  {
    field: "msg",
    headerName: "Delivery Msg",
    width: 100,
  },
];

