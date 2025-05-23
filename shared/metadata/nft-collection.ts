/**
 * NFT Collection Metadata
 * This file defines metadata for our pixel art BlockReceipt NFT collection
 */

export interface NFTMetadata {
  id: string;
  name: string;
  image: string;
  description: string;
  tier: 'BASIC' | 'STANDARD' | 'PREMIUM' | 'LUXURY';
  categories: string[];
  attributes: {
    [key: string]: string | number;
  };
}

// NFT Collection Array
export const NFT_COLLECTION: NFTMetadata[] = [
  {
    id: 'receipt-warrior',
    name: 'Receipt Warrior',
    image: '/nft-images/receipt-warrior.svg',
    description: 'A brave warrior ready to defend your purchase history with honor and pixels.',
    tier: 'PREMIUM',
    categories: ['entertainment', 'gaming', 'sports'],
    attributes: {
      rarity: 'Epic',
      power: 72,
      defense: 68,
      speed: 65
    }
  },
  {
    id: 'crypto-receipt',
    name: 'Crypto Receipt',
    image: '/nft-images/crypto-receipt.svg',
    description: 'Digital asset receipt secured with blockchain technology and pixel perfection.',
    tier: 'LUXURY',
    categories: ['tech', 'finance', 'cryptocurrency'],
    attributes: {
      rarity: 'Legendary',
      encryption: 92,
      decentralization: 88,
      volatility: 75
    }
  },
  {
    id: 'fashion-receipt',
    name: 'Fashion Couture Receipt',
    image: '/nft-images/fashion-receipt.svg',
    description: 'Stylish receipt that showcases your fashion-forward purchases with pixel elegance.',
    tier: 'PREMIUM',
    categories: ['fashion', 'clothing', 'accessories', 'retail'],
    attributes: {
      rarity: 'Rare',
      style: 85,
      trendiness: 79,
      exclusivity: 70
    }
  },
  {
    id: 'grocery-hero',
    name: 'Grocery Hero',
    image: '/nft-images/grocery-hero.svg',
    description: 'A super grocery receipt that saves the day by tracking all your essentials.',
    tier: 'STANDARD',
    categories: ['groceries', 'food', 'household'],
    attributes: {
      rarity: 'Uncommon',
      nutrition: 65,
      value: 60,
      sustainability: 70
    }
  },
  {
    id: 'tech-receipt',
    name: 'Tech Gadget Receipt',
    image: '/nft-images/tech-receipt.svg',
    description: 'High-tech receipt for your gadget purchases, pixelated for maximum coolness.',
    tier: 'PREMIUM',
    categories: ['tech', 'electronics', 'gadgets', 'computer'],
    attributes: {
      rarity: 'Epic',
      innovation: 82,
      durability: 68,
      performance: 75
    }
  },
  {
    id: 'restaurant-receipt',
    name: 'Foodie Delight Receipt',
    image: '/nft-images/restaurant-receipt.svg',
    description: 'A delicious pixelated receipt capturing your culinary adventures.',
    tier: 'STANDARD',
    categories: ['food', 'restaurant', 'dining', 'meal'],
    attributes: {
      rarity: 'Uncommon',
      flavor: 78,
      presentation: 72,
      value: 65
    }
  },
  {
    id: 'beauty-receipt',
    name: 'Shampoo Samurai',
    image: '/nft-images/beauty-receipt.svg',
    description: 'Pixel-perfect receipt for your beauty and personal care purchases with a samurai spirit.',
    tier: 'STANDARD',
    categories: ['beauty', 'personal care', 'health', 'cosmetics', 'shampoo'],
    attributes: {
      rarity: 'Rare',
      effectiveness: 75,
      natural: 70,
      fragrance: 68
    }
  },
  {
    id: 'travel-receipt',
    name: 'Travel Explorer Receipt',
    image: '/nft-images/travel-receipt.svg',
    description: 'A pixelated memento of your travel purchases and adventures around the world.',
    tier: 'LUXURY',
    categories: ['travel', 'transportation', 'hotel', 'vacation'],
    attributes: {
      rarity: 'Legendary',
      distance: 88,
      experience: 92,
      memories: 95
    }
  }
];

/**
 * Function to get NFT metadata by ID
 */
export function getNFTById(id: string): NFTMetadata | undefined {
  return NFT_COLLECTION.find(nft => nft.id === id);
}

/**
 * Function to filter NFTs by categories
 */
export function getNFTsByCategories(categories: string[]): NFTMetadata[] {
  if (!categories || categories.length === 0) {
    return NFT_COLLECTION;
  }
  
  return NFT_COLLECTION.filter(nft => {
    return nft.categories.some(category => 
      categories.some(c => category.toLowerCase().includes(c.toLowerCase()))
    );
  });
}

/**
 * Function to filter NFTs by tier
 */
export function getNFTsByTier(tier: string): NFTMetadata[] {
  return NFT_COLLECTION.filter(nft => nft.tier === tier);
}

/**
 * Function to get NFTs filtered by both categories and tier
 */
export function getFilteredNFTs(categories: string[], tier?: string): NFTMetadata[] {
  let filteredNFTs = getNFTsByCategories(categories);
  
  if (tier) {
    filteredNFTs = filteredNFTs.filter(nft => nft.tier === tier);
  }
  
  return filteredNFTs;
}

/**
 * Function to get NFTs that match item tags from a receipt
 */
export function getNFTsFromReceiptItems(items: any[]): NFTMetadata[] {
  if (!items || items.length === 0) {
    return NFT_COLLECTION;
  }
  
  // Extract keywords from item names
  const keywords = items.flatMap((item: any) => {
    const name = item.name || '';
    return name.toLowerCase().split(' ').filter((word: string) => word.length > 3);
  });
  
  // If no keywords, return all NFTs
  if (keywords.length === 0) {
    return NFT_COLLECTION;
  }
  
  // Filter NFTs by the keywords
  return NFT_COLLECTION.filter(nft => {
    return nft.categories.some(category => 
      keywords.some(keyword => category.toLowerCase().includes(keyword))
    );
  });
}