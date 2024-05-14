import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "semibold",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: "semibold",
    marginBottom: 5,
  },
  text: {
    fontSize: 10,
    textAlign: "justify",
  },
});
const PDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Md Saiful Islam Rafsan</Text>
        <Text style={styles.text}>Frontend Developer</Text>
        <Text style={styles.text}>Email: mdsaifulislamrafsan099@gmail.com</Text>
        <Text style={styles.text}>Phone: 01879746696</Text>
        <Text style={styles.text}>Location: Kamlapur, Dhaka</Text>

        <View style={styles.section}>
          <Text style={styles.subheader}>Summary</Text>
          <Text style={styles.text}>
            Creative and detail-oriented Frontend Developer with over 0 years of
            experience in designing and developing responsive web applications.
            Proficient in HTML, CSS, JavaScript, and various frontend
            frameworks. Skilled in translating UI/UX designs into code that
            exceeds client expectations. Passionate about creating user-friendly
            interfaces and optimizing website performance.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Skills</Text>
          <Text style={styles.text}>
            - Languages: HTML5, CSS3, JavaScript (ES6+)
          </Text>
          <Text style={styles.text}>
            - Frontend Frameworks/Libraries: React.js
          </Text>
          <Text style={styles.text}>
            - CSS Frameworks: Bootstrap, Tailwind CSS
          </Text>
          <Text style={styles.text}>- Version Control: Git, GitHub</Text>
          <Text style={styles.text}>
            - Responsive Design: Media Queries, Flexbox, Grid
          </Text>
          <Text style={styles.text}>- UI/UX Design Tools: Figma</Text>
          <Text style={styles.text}>- Other Tools: npm, Webpack</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Education</Text>
          <Text style={styles.text}>
            BSS Degree | Govt.mojib collage | Companigonj , Noakhali
          </Text>
          {/* Add more education items similarly */}
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Projects</Text>
          <Text style={styles.text}>
            DrawnToArt |The project is a painting and drawing-related website
            aimed at providing a platform for artists of all levels to explore,
            create, and share their passion for visual art. It offers a range of
            features and functionalities tailored to cater to the diverse needs
            and interests of the artistic community. Overview: The website
            serves as a virtual hub for painters and drawers. Users can browse
            through galleries of inspiring artwork, showcase their own
            creations. Technology:- 1.lottie-react 2.daisyui 3.navigateui
            4.react-tooltip Features: 1.Add: Logged-in users can easily
            contribute to add new painting and drawing-related content to the
            website 2.Delete: Users possess the capability to remove their own
            contributed content 3.Update: Users have the flexibility to modify
            existing painting and drawing-related data, enabling them to refine
            artwork details, amend comments, or update profile information. |
            mongodb , express , firebase , react , navigate ui , daisy ui ,
            tailwind css etc
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Languages</Text>
          <Text style={styles.text}>- English (Fluent)</Text>
          <Text style={styles.text}>- Bengali (Native)</Text>
          {/* Add more language items similarly */}
        </View>
      </View>
    </Page>
  </Document>
);

export default PDF;
