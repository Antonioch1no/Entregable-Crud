const UsersList = ({ deleteUser, selectUser, usersList }) => {
	return (
		<div className="contact-info">
			<ul style={{ listStyle: "none" }}>
				{usersList.map((user) => (
					<li key={user.id}>
						<p>nombre: {user.first_name} </p>
						<p>apellido: {user.last_name} </p>
						<p>email: {user.email} </p>
						<p>password: {user.password} </p>
						<p>birthday: {user.birthday} </p>
						<p>
							<button onClick={() => deleteUser(user.id)}>
								<i class="fa-solid fa-trash"></i>
							</button>
						</p>
						<p>
							<button onClick={() => selectUser(user)}>
								<i class="fa-regular fa-pen-to-square"></i>
							</button>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};
export default UsersList;
