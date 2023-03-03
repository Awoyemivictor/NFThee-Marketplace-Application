import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb from '../../common/breadcrumb.component';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Container, Button } from 'reactstrap';
import Swal from 'sweetalert2';
// import BlogService from "../../services/blog.service";
// import Loader from "./loader";
import { toast } from 'react-toastify';
import instance from '../../../axios'

import axios from 'axios';

const Categories = () => {
	let history = useHistory();

	const [data, setdata] = useState([]);
	const [loading, setLoading] = useState(true);
	const [value, setValue] = useState();
	//   for(var i=0;i<Number.MAX_VALUE,i++){
	//     setValue(i);
	// }

	const authAxios = axios.create({
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
	const columns = [
		{
			name: 'Name',
			selector: 'name',
			sortable: true,
		},
		{
			name: 'Icon',
			selector: 'icon',
			sortable: true,
			cell: (data) => <div dangerouslySetInnerHTML={{ __html: data.icon }} />,
		},
		{
			name: 'Description',
			selector: 'description',
			sortable: true,
		},
		{
			name: 'Status',
			selector: 'status',
			sortable: true,
		},
		{
			name: 'Action',
			selector: '_id',
			sortable: true,
			cell: (data) => (
				<div>
					<button
						className="btn btn-primary btn-sm"
						onClick={() => onView(data)}
						// id="1"
					>
						<i className="fa fa-eye"></i>
					</button>{' '}
					<button
						className="btn btn-secondary btn-sm"
						// onClick={() => onDel(data)}
						onClick={() => onUpdate(data)}
						// key={id}
					>
						<i className="fa fa-pencil"></i>
					</button>{' '}
					<button
						className="btn btn-danger btn-sm"
						onClick={() => onDel(data)}
						// key={id}
					>
						<i className="fa fa-trash"></i>
					</button>
				</div>
			),
		},
	];

	const onDel = (data) => {
		Swal.fire({
			title: 'Are you sure you want to do this?',
			cancelButtonText: 'No!',
			confirmButtonText: 'Yes!',
			reverseButtons: true,
			showCancelButton: true,
		}).then(function(result) {
			if (result.value) {
				deleteCollection(data);
			}
		});
	};

	const tableData = {
		data,
		columns,
	};
	useEffect(() => {
		instance.get('/api/getCategory').then((ress) => {
			console.log(ress.data);
			if (ress.data) {
				setdata(ress.data.data);
				console.log(ress.data);
				setLoading(false);
			}
		});
	}, []);

	const deleteCollection = (e) => {
		const next = [...data];
		const removedItems = next.splice(next.indexOf(e), 1);
		const deleteCarModel = authAxios.get(
			`${process.env.REACT_APP_ADMIN_RENDER_BASE_URL}/api/deleteCategory?catId=${e._id}`
		);
		setdata(next.filter((item) => item._id !== e._id));
	};

	const onView = (e) => {
		console.log('onView=>', e);
		history.push(
			`${process.env.PUBLIC_URL}/dashboard/singlecategory?categoryId=${e._id}`
		);
		console.log();
	};

	const onUpdate = (e) => {
		console.log('onUpdate=>', e);
		history.push(
			`${process.env.PUBLIC_URL}/dashboard/updatecategory?categoryId=${e._id}`
		);
		console.log();
	};

	const openTaskWrapper = () => {
		history.push(`${process.env.PUBLIC_URL}/dashboard/addcategory`);
	};

	return (
		<Fragment>
			<Breadcrumb title="Category" parent="Dashboard" />
			<Container fluid={true}>
				<div className="text-right">
					<Button
						color="primary"
						type="submit"
						onClick={openTaskWrapper}
						className="btn-lg"
					>
						<i className="icon-plus"></i> Add New Category
					</Button>
				</div>
				<DataTableExtensions {...tableData}>
					<DataTable
						columns={columns}
						data={data}
						noHeader
						defaultSortField="id"
						defaultSortAsc={false}
						highlightOnHover
						pagination
						striped
						// dense
					/>
				</DataTableExtensions>

				{/* <div className="add-task-btn-wrapper">
					<span className={'add-task-btn new-'}>
						<div
							href=""
							className="btn btn-primary"
							onClick={() => openTaskWrapper()}
						>
							<i className="icon-plus"></i> Add new category
						</div>
					</span>
				</div> */}
			</Container>
		</Fragment>
	);
};

export default Categories;
