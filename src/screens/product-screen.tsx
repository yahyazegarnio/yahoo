import { FlatList, Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import products, { type Product } from '@/data/products';

function ProductCard({ item }: { item: Product }) {
  return (
    <ThemedView type="backgroundElement" style={styles.productCard}>
      <Image
        accessibilityLabel={`${item.name} sneaker`}
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.productDetails}>
        <ThemedText type="small" themeColor="textSecondary">
          {item.category}
        </ThemedText>
        <ThemedText type="smallBold" numberOfLines={1} style={styles.productName}>
          {item.name}
        </ThemedText>
        <ThemedText type="smallBold">${item.price}</ThemedText>
      </View>
    </ThemedView>
  );
}

export default function ProductScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.productRow}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View style={styles.header}>
              <ThemedText type="smallBold" style={styles.eyebrow}>
                THE EVERYDAY SNEAKER
              </ThemedText>
              <ThemedText type="title" style={styles.title}>
                Find your pair.
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Explore our collection of Nike favorites.
              </ThemedText>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                Popular sneakers
              </ThemedText>
            </View>
          }
          renderItem={({ item }) => <ProductCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  listContent: {
    paddingHorizontal: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.four,
  },
  header: {
    paddingTop: Spacing.four,
    paddingBottom: Spacing.four,
  },
  eyebrow: {
    color: '#687280',
    letterSpacing: 1.4,
    marginBottom: Spacing.two,
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
    marginBottom: Spacing.one,
  },
  sectionTitle: {
    fontSize: 21,
    lineHeight: 28,
    marginTop: Spacing.five,
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: Spacing.three,
  },
  productCard: {
    width: '48%',
    overflow: 'hidden',
    borderRadius: 16,
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#f3f4f6',
  },
  productDetails: {
    padding: Spacing.two,
    gap: Spacing.one,
  },
  productName: {
    minHeight: 20,
  },
});
