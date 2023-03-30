import { Box, Link, Paper, Typography } from "@mui/material";
import "@fontsource/hind-siliguri";

const questions = [
    {
        icons: "faq-icons/robot.svg",
        heading: "What is hackathon?",
        body: <>A 24-hour tech event for teams of students to learn new skills, build cool tech projects, and meet tons of other students and tech professionals.</>
    },
    {
        icons: "faq-icons/handhshake.svg",
        heading: "Do I need to have a team?",
        body: <>There is no strict requirement to have a team. However, even if a team is desired, you can work with a team of two to four people. We will also have team matching activities if you would like a team. </>
    },
    {
        icons: "faq-icons/person.svg",
        heading: "Who can attend?",
        body: <>You must be at least <b>18 years</b> of age. Non-STEM majors, first-time hackers, and beginner coders are <b>welcomed</b> and encouraged to join us! This hackathon is meant to introduce AI to everyone. All you need is a drive and passion to learn!</>
    },
    {
        icons: "faq-icons/computer.svg",
        heading: "What projects should I expect?",
        body: <>Topics such as Natural Language Processing, Machine Learning, Data Analytics, and more will be represented amongst these projects, and we are confident that both the creativity and quality of the submissions will be incredibly high</>
    },
    {
        icons: "faq-icons/wallet.svg",
        heading: "How much does it cost?",
        body: <>There's food, awesome workshops, and super cool swag that are completely <b>FREE</b>!</>
    },
]

const fontSizes = {
    title: "3rem",
    heading: "1.2rem",
    headingCard: "1.2rem",
    bodyCard: "1rem",
}

function displayListOfQuestions() {
    return (questions.map((obj, key) => {
        return (
            <Box key={key} marginBottom='1.5rem' sx={{minWidth: '30%', maxWidth: "47%"}}>
                <Box marginBottom='0.5rem' sx={{
                    display: "flex",
                    alignContent: "center",
                }}>
                    <Box marginRight='1rem'>
                        <img src={obj.icons} style={{height: fontSizes.headingCard}} />
                    </Box>
                    <Typography variant="h2" fontSize={fontSizes.headingCard} 
                                fontWeight={600} fontFamily='Hind Siliguri'>
                        {obj.heading}
                    </Typography>
                </Box>
                <Typography fontFamily='Hind Siliguri' fontSize={fontSizes.bodyCard}>
                    {obj.body}
                </Typography>
            </Box>
        );
    }));
}


function FAQs() {
    return (
        <Box sx={{padding: "5rem"}}>
            <Box>
                <Box sx={{
                    display:"flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Typography variant="h2" color='#FEF9EE' fontSize={fontSizes.title} 
                                fontWeight={500} fontFamily={"var(--lucidity)"}>
                        FAQS
                    </Typography>
                    <Typography marginBottom="2rem" fontSize={fontSizes.heading} fontFamily={"Hind Siliguri"}>
                        Have more questions? Send an email to <Link>contact@aisociety.io</Link>
                    </Typography>
                </Box>
                <Paper sx={{
                    padding: "5rem",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignContent: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#FEF9EE",
                }}>
                    {displayListOfQuestions()}
                    <Box margin="-5rem" marginTop="0rem" width={'40%'}>
                        <img src="FAQs_cards_pic.svg"/>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}

export default FAQs;