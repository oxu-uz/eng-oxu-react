import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, Divider, Link } from '@mui/material';
import { School, Science, Groups, Article, Handshake } from '@mui/icons-material';

function ResearchAndPublications() {
    return (
        <Box sx={{ maxWidth: 1200, margin: '0 auto', p: 4 }}>
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#0a37b3' }}>
                    Research and Publications
                </Typography>
                <Typography variant="h5" component="p" sx={{ color: '#292929'}}>
                    Advancing Knowledge Through Innovation and Collaboration
                </Typography>
            </Box>

            {/* Introduction */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium', display: 'flex', alignItems: 'center' }}>
                    <Science sx={{ mr: 2, color: '#0a37b3',fontSize: 40 }} />
                    Research at AIU
                </Typography>
                <Typography variant="body1" paragraph>
                    At Asia International University (AIU), research is the cornerstone of academic excellence and innovation. We are dedicated to cultivating a strong research culture that involves both faculty and students in meaningful, interdisciplinary projects that contribute to regional and global knowledge development.
                </Typography>
                <Typography variant="body1" paragraph>
                    AIU is committed to advancing research that addresses current challenges and anticipates future needs. Our research programs aim to foster innovation, social impact, and academic rigor across all disciplines including health sciences, business, engineering, information technology, and the humanities.
                </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Faculty Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium', display: 'flex', alignItems: 'center' }}>
                    <School sx={{ mr: 2, color: '#0a37b3',fontSize: 40 }} />
                    For Faculty Members
                </Typography>
                <Typography variant="body1" paragraph>
                    Our faculty lead pioneering research that pushes boundaries and promotes academic leadership. AIU supports faculty with the resources and infrastructure needed to develop impactful research.
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Faculty Research Support:
                </Typography>
                <List>
                    {[
                        "Competitive internal research grants and seed funding",
                        "Access to modern laboratories and research facilities",
                        "Support for publishing in peer-reviewed and indexed journals",
                        "Conference participation and presentation funding",
                        "Recognition through annual Research Excellence Awards"
                    ].map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <Box sx={{ width: 8, height: 8, backgroundColor: '#011b4b', borderRadius: '50%' }} />
                            </ListItemIcon>
                            {item}
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Student Section */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium', display: 'flex', alignItems: 'center' }}>
                    <Groups sx={{ mr: 2, color: '#0a37b3',fontSize: 40 }} />
                    For Students
                </Typography>
                <Typography variant="body1" paragraph>
                    AIU actively encourages students to participate in research as a key part of their academic journey. From undergraduate to postgraduate levels, students have opportunities to engage in faculty-led projects and independent research initiatives.
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Student Research Opportunities:
                </Typography>
                <List>
                    {[
                        "Research mentorship programs",
                        "Summer research internships",
                        "Final-year research project guidance",
                        "Workshops on proposal writing, data analysis, and publishing",
                        "Participation in AIU's Annual Student Research Conference"
                    ].map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <Box sx={{ width: 8, height: 8, backgroundColor: '#011b4b', borderRadius: '50%' }} />
                            </ListItemIcon>
                            {item}
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Research Strategy */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
                    Research Plan and Strategy
                </Typography>
                <Typography variant="body1" paragraph>
                    AIU's research strategy is focused on sustainability, relevance, and global standards. Our long-term plan includes:
                </Typography>

                <List sx={{ listStyleType: 'decimal', pl: 4 }} component="ol">
                    {[
                        "Annual Research Themes aligned with the UN Sustainable Development Goals and regional priorities",
                        "Multidisciplinary Collaboration across departments and partner institutions globally",
                        "Publication Roadmap with clear targets for faculty and student outputs in high-impact journals",
                        "Capacity Development through ongoing training, seminars, and peer review processes",
                        "Ethical Compliance with oversight by the AIU Research Ethics and Review Board"
                    ].map((item, index) => (
                        <ListItem key={index} sx={{ display: 'list-item', py: 0.5, pl: 1 }}>
                            <Typography variant="body1">{item}</Typography>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Publications */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium', display: 'flex', alignItems: 'center' }}>
                    <Article sx={{ mr: 2, color: '#0a37b3',fontSize: 40 }} />
                    Publications
                </Typography>
                <Typography variant="body1" paragraph>
                    AIU proudly showcases the research output of our faculty and students. We maintain an online repository and encourage open access publishing to enhance visibility and collaboration.
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Recent Publications Include:
                </Typography>
                <List>
                    {[
                        "Journal articles in Scopus and Web of Science-indexed journals",
                        "Book chapters and edited volumes",
                        "Conference proceedings and technical reports",
                        "Undergraduate and postgraduate theses"
                    ].map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <Box sx={{ width: 8, height: 8, backgroundColor: '#011b4b', borderRadius: '50%' }} />
                            </ListItemIcon>
                            {item}
                        </ListItem>
                    ))}
                </List>

                {/*<Typography variant="body1" paragraph sx={{ mt: 2, fontStyle: 'italic' }}>*/}
                {/*    <Link href="#" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>*/}
                {/*        [Link to: AIU Research Repository or Downloadable Publications List]*/}
                {/*    </Link>*/}
                {/*</Typography>*/}
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Collaboration */}
            <Box sx={{ mb: 6, textAlign: 'center', p: 4, backgroundColor: 'action.hover', borderRadius: 2 }}>
                <Handshake sx={{ fontSize: 60, color: '#0a37b3', mb: 2 }} />
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
                    Collaborate With Us
                </Typography>
                <Typography variant="body1" paragraph sx={{ maxWidth: 800, margin: '0 auto' }}>
                    Asia International University invites researchers, institutions, and industry partners to collaborate with our research community. Whether you're interested in joint projects, knowledge exchange, or innovation development, AIU is the ideal hub for research partnerships in Asia and beyond.
                </Typography>
            </Box>
        </Box>
    );
}

export default ResearchAndPublications;