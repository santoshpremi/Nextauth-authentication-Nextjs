import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Login() {
	const router = useRouter();
	const [authState, setAuthState] = useState({
		email: "",
		password: "",
	});
	const [pageState, setPageState] = useState({
		error: "",
		processing: false,
	});

	const handleFieldChange = (e) => {
		setAuthState((old) => ({ ...old, [e.target.id]: e.target.value }));
	};

	const simplifyError = (error) => {
		const errorMap = {
			CredentialsSignin: "Invalid email or password",
		};
		return errorMap[error] ?? "Unknown error occurred";
	};

	const handleAuth = async () => {
		setPageState((old) => ({
			...old,
			processing: true,
			error: "",
		}));

		signIn("credentials", {
			...authState,
			redirect: false,
		})
			.then((response) => {
				console.log(response);
				if (response.ok) {
					// Authenticate user
					router.push("/");
				} else {
					setPageState((old) => ({
						...old,
						processing: false,
						error: response.error,
					}));
				}
			})
			.catch((error) => {
				console.log(error);
				setPageState((old) => ({
					...old,
					processing: false,
					error: error.message ?? "Something went wrong!",
				}));
			});
	};

	return (
		<Box
			sx={{
				marginTop: 8,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: "#1565c0" }} />

			<Typography component="h1" variant="h5">
				Sign in
			</Typography>

			<Grid
				container
				alignItems="center"
				justifyContent="center"
				height="35vh"
				width="60vh"
			>
				<Grid item>
					{pageState.error !== "" && (
						<Alert severity="error" sx={{ mb: 2 }}>
							{simplifyError(pageState.error)}
						</Alert>
					)}

					<TextField
						sx={{ mb: 1 }}
						onChange={handleFieldChange}
						value={authState.email}
						fullWidth
						label="Email Address *"
						id="email"
					/>

					<TextField
						sx={{ mb: 1 }}
						onChange={handleFieldChange}
						value={authState.password}
						fullWidth
						label="Password"
						type="password"
						id="password"
					/>

					<Button
						disabled={pageState.processing}
						sx={{ mb: 1 }}
						onClick={handleAuth}
						type="submit"
						fullWidth
						variant="contained"
					>
						Sign In
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	};
}
