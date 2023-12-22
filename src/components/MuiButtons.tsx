import { Delete, Send } from "@mui/icons-material";
import {
	Button,
	Typography,
	Stack,
	Card,
	CardContent,
	CardHeader,
} from "@mui/material";

const VARIANTS = ["text", "contained", "outlined"] as const;
const COLORS = [
	"primary",
	"secondary",
	"success",
	"error",
	"info",
	"warning",
] as const;

const SIZE = ["small", "medium", "large"] as const;

// Create a union type for the variants
type ButtonVariant = (typeof VARIANTS)[number];
type ButtonColor = (typeof COLORS)[number];
type ButtonSize = (typeof SIZE)[number];

function MuiButtons() {
	return (
		<>
			<Card>
				<CardHeader
					title={
						<Typography variant="h4" gutterBottom>
							Buttons
						</Typography>
					}
				/>
				<CardContent>
					<Stack spacing={4}>
						<Stack
							direction="row"
							spacing={2}
							marginBottom={4}
							flexWrap="wrap"
							useFlexGap
						>
							<Button variant="text" href="https://google.com" target="blank">
								Link button
							</Button>
							{VARIANTS.map((btnVariant) => (
								<Button variant={btnVariant as ButtonVariant} key={btnVariant}>
									{btnVariant}
								</Button>
							))}
						</Stack>
						<Stack direction="row" spacing={2} useFlexGap>
							<Button variant="text" startIcon={<Delete />}>
								Delete
							</Button>
							<Button variant="outlined" startIcon={<Delete />}>
								Delete
							</Button>
							<Button variant="contained" endIcon={<Send />}>
								Send
							</Button>
						</Stack>
						<Stack spacing={2} useFlexGap>
							{SIZE.map((size) => {
								return (
									<Stack spacing={2} useFlexGap>
										<Typography
											variant="h6"
											gutterBottom
											textTransform={"capitalize"}
										>
											{size}
										</Typography>
										{VARIANTS.map((btnVariant) => {
											return (
												<Stack
													direction="row"
													spacing={2}
													key={btnVariant}
													flexWrap="wrap"
													useFlexGap
												>
													{COLORS.map((btnColor) => (
														<Button
															variant={btnVariant as ButtonVariant}
															color={btnColor as ButtonColor}
															key={btnColor}
															size={size as ButtonSize}
														>
															{btnColor}
														</Button>
													))}
													<Button
														variant={btnVariant as ButtonVariant}
														disabled
														size={size as ButtonSize}
													>
														Disabled
													</Button>
												</Stack>
											);
										})}
									</Stack>
								);
							})}
						</Stack>
					</Stack>
				</CardContent>
			</Card>
		</>
	);
}

export default MuiButtons;
