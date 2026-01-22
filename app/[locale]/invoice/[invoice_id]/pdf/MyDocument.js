import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  header: { marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold' },
  section: { marginBottom: 10 },
  table: { marginTop: 10 },
  tableRow: { flexDirection: 'row', marginBottom: 5 },
  tableCellHeader: { flex: 1, fontWeight: 'bold' },
  tableCell: { flex: 1 },
  totalRow: { fontWeight: 'bold' },
  footer: { marginTop: 20, fontSize: 10 },
});

const MyDocument = ({ invoice_id }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Invoice</Text>
        <Text>Invoice ID: {invoice_id}</Text>
        <Text>Date: {new Date().toLocaleDateString()}</Text>
      </View>
      {/* ...rest of your invoice content... */}
    </Page>
  </Document>
);

export default MyDocument;
