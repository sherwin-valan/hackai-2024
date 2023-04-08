import { Box, Typography, useMediaQuery } from "@mui/material";
import "@fontsource/hind-siliguri";

const sponserDir = "sponsers"
const sponsersLogos= [["Blackstone.png", "geico.svg"], 
                      [, "Jasper.svg", "TT.svg"], 
                      ["RISE1.png", "JSOM.svg",  "CAIML.svg"],]
const sponsersPath = sponsersLogos.map((row) => row.map((path) => sponserDir + '/' + path))

const fontSize =  {
    title: "3rem",
    subHeading: "1.2rem",
}

function displaySponsers() {
    const mobile = useMediaQuery('(max-width:1023px)')

    return (
        sponsersPath.map((row, key) => {
            return (
                <Box key={key} sx={ mobile ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt:2
                } : {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    pt:2
                }}>
                    {row.map((path, key) => 
                        <img key={key} src={path} />
                    )}
                </Box>
            );
        })
    );
}

function Partners() {
    return (
        <Box marginY="3rem" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Box color="#1A2025" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography fontSize={fontSize.title} fontFamily={"var(--lucidity)"}>
                    Partners
                </Typography>
                <Typography fontSize={fontSize.subHeading} fontFamily='Hind Siliguri'>
                    More coming soon!
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "70%"
            }}>
                {displaySponsers()}
            </Box>
        </Box>
    );
}

export default Partners;