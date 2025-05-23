import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
// Removed legacy Mumbai blockchain routes
import blockchainAmoyRoutes from "./routes/blockchain-amoy";
import multiBlockchainRoutes from "./routes/multi-blockchain";
import emailRoutes from "./routes/email";
import paymentRoutes from "./routes/payments";
import thresholdReceiptRoutes from "./routes/threshold-receipt";
import encryptedPaymentRoutes from "./routes/encrypted-payments";
import encryptionRoutes from "./routes/encryption";
import tacoRoutes from "./routes/taco";
import cryptoRoutes from "./routes/crypto";
import inventoryRoutes from "./routes/inventory";
import merchantPluginRoutes from "./routes/merchant-plugin";
// New product catalog routes
import productsRoutes from "./routes/products";
// Import merchant registry routes
import { merchantRoutes } from "./routes/merchants";
// POS webhook integration routes
import posWebhookRoutes from "./routes/posWebhook";
import nftReceiptsRoutes from "./routes/nft-receipts";
// Metadata access control routes
import metadataRoutes from "./routes/metadata";
// OCR receipt scanning routes
import ocrRoutes from "./routes/ocr";
// OCR test tool routes
import ocrTestRoutes from "./routes/ocrTest";
// Receipt upload routes
// Import the uploadReceipt routes
import uploadReceiptRoutes from "./routes/uploadReceipt";
// Import the auto-process receipt routes
import autoProcessReceiptRoutes from "./routes/autoProcessReceipt";
// Import the unified upload-and-mint route
import uploadAndMintRoutes from "./routes/uploadAndMint";
// Import the NFT options routes
import nftOptionsRoutes from "./routes/nftOptions";
// User authentication and wallet management routes
import authRoutes from "./routes/auth";
// Import the gallery routes for NFT display
import galleryRoutes from "./routes/gallery";
// Import the NFT catalog routes
import nftsRoutes from "./routes/nfts";
// Import the NFT Purchase Bot routes
import nftPurchaseBotRoutes from "./routes/nftPurchaseBot";
// Import the NFT Pool routes
import nftPoolRoutes from "./routes/nftPool";
// Import the task queue routes
import taskRoutes from "./routes/tasks";
// Import test routes for the task queue
import testQueueRoutes from "./routes/test-queue";
// Import hot wallet routes with TACo encryption
// Import test NFT routes for development
import testNFTRoutes from "./routes/test-nft";
import walletTacoRoutes from "./routes/wallet";
// Import wallet authentication routes
import walletAuthRoutes from "./routes/wallet";
// Import receipt encryption routes with TaCo
// Import test upload route
import testUploadRoutes from "./routes/testUpload";
// Import coupon routes
import couponRoutes from "./routes/coupons";
// Import NFT routes
import nftRoutes from "./routes/nfts";
// Import dual-metadata related routes
import promotionsRoutes from "./routes/promotions";
import nftMetadataRoutes from "./routes/nftMetadata";


export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  // All routes are prefixed with /api
  
  // Mumbai blockchain routes have been removed completely
  
  // Register Amoy blockchain routes (recommended)
  app.use('/api/blockchain/amoy', blockchainAmoyRoutes);
  
  // Register multi-blockchain status route
  app.use('/api/blockchain', multiBlockchainRoutes);
  
  // Register email scanning routes
  app.use('/api/email', emailRoutes);
  
  // Register payment processing routes
  app.use('/api/payments', paymentRoutes);
  
  // Register threshold receipt routes
  app.use('/api/threshold-receipt', thresholdReceiptRoutes);
  
  // Register encrypted payment routes
  app.use('/api/encrypted-payments', encryptedPaymentRoutes);
  
  // Register encryption key and shared access routes
  app.use(encryptionRoutes);
  
  // Register Taco threshold encryption routes
  app.use('/api/taco', tacoRoutes);
  
  // Register receipt encryption routes with TaCo
  // app.use('/api/receipt-encryption', receiptEncryptionRoutes);
  
  // Register crypto payment routes
  app.use('/api/crypto', cryptoRoutes);
  
  // Register inventory management routes
  app.use('/api/inventory', inventoryRoutes);
  
  // Register merchant plugin routes
  app.use('/api/merchant', merchantPluginRoutes);
  
  // Register new catalog routes
  app.use('/api/products', productsRoutes);
  app.use('/api/merchants', merchantRoutes);
  app.use('/api/nft-receipts', nftReceiptsRoutes);
  
  // Register metadata access control routes
  app.use('/api', metadataRoutes);
  
  // Register OCR routes
  app.use('/api/ocr', ocrRoutes);
  
  // Register OCR test tool routes
  app.use('/api/ocr-test', ocrTestRoutes);
  
  // Register receipt upload routes
  app.use('/api/upload', uploadReceiptRoutes);
  
  // Register test NFT routes (for development testing)
  app.use('/api', testNFTRoutes);
  
  // Register auto-process receipt routes (development mode)
  if (process.env.NODE_ENV === 'development') {
    app.use('/api', autoProcessReceiptRoutes);
    console.log('[express] Auto-process receipt endpoints enabled in development mode');
    
    // Register task queue test endpoints
    app.use('/api', taskRoutes);
    console.log('[express] Task queue test endpoints enabled in development mode');
  }
  
  // Register NFT options routes
  app.use('/api', nftOptionsRoutes);
  
  // Register NFT gallery routes
  app.use('/api/gallery', galleryRoutes);
  
  // Register NFT catalog routes
  // Register NFT routes (including minting)
  app.use('/api/nfts', nftsRoutes);
  
  // Register NFT Purchase Bot routes
  app.use('/api/nft-bot', nftPurchaseBotRoutes);
  
  // Register NFT Pool routes
  app.use('/api/nfts', nftPoolRoutes);
  
  // Register Task Queue routes
  app.use('/api', taskRoutes);
  
  // Register authentication routes
  app.use('/api/auth', authRoutes);
  
  // Register Hot Wallet routes with TACo encryption
  app.use('/api/wallet', walletTacoRoutes);
  
  // Register test upload route (for debugging file upload issues)
  app.use('/api', testUploadRoutes);
  
  // Register wallet authentication routes
  app.use('/api/wallet-auth', walletAuthRoutes);
  
  // Register Test Queue routes (only in development)
  if (process.env.NODE_ENV === 'development') {
    app.use('/api/test', testQueueRoutes);
    console.log('[express] Task queue test endpoints enabled in development mode');
  }
  
  // Register coupon routes
  app.use('/api/coupons', couponRoutes);
  console.log('[express] Coupon routes registered successfully');
  
  // Register NFT routes
  app.use('/api/nfts', nftRoutes);
  console.log('[express] NFT routes registered successfully');
  
  // Register promotion routes for vendor-controlled promotional metadata
  app.use('/api/promotions', promotionsRoutes);
  console.log('[express] Promotions routes registered successfully');
  
  // Register NFT metadata routes for dual metadata structure
  app.use('/api/nft-metadata', nftMetadataRoutes);
  console.log('[express] NFT metadata routes registered successfully');

  // Register POS webhook routes for merchant integration
  app.use('/api/pos', posWebhookRoutes);
  console.log('[express] POS webhook routes registered successfully');
  

  
  // Blockchain network status endpoint with multi-provider details
  app.get('/api/blockchain/status', async (req, res) => {
    try {
      const timestamp = new Date().toISOString();
      
      // Get the services from app.locals - handle possible structure/name differences
      const amoyService = req.app.locals.blockchainAmoyService || req.app.locals.amoyProvider;
      const cryptoPaymentService = req.app.locals.cryptoPaymentService;
      
      // Build the status response
      const status: {
        timestamp: string;
        networks: Record<string, any>;
        cryptoPayment?: any;
      } = {
        timestamp,
        networks: {}
      };
      
      // Mumbai has been removed
      
      // Add Amoy status if available
      if (amoyService && typeof amoyService.getNetworkStatus === 'function') {
        try {
          status.networks.amoy = await amoyService.getNetworkStatus();
        } catch (err) {
          status.networks.amoy = { 
            status: 'Error', 
            error: 'Failed to get network status',
            mockMode: true
          };
        }
      } else {
        status.networks.amoy = { status: 'Service Unavailable' };
      }
      
      // Add other network statuses as needed
      status.networks.ethereum = {
        status: 'Available',
        chainId: 1,
        mockMode: true,
        network: 'ethereum',
        message: 'Ethereum Mainnet - Coming Soon'
      };
      
      status.networks.bitcoin = {
        status: 'Available',
        chainId: 0,
        mockMode: true,
        network: 'bitcoin',
        message: 'Bitcoin Network - Coming Soon'
      };
      
      status.networks.solana = {
        status: 'Available',
        chainId: 0,
        mockMode: true,
        network: 'solana',
        message: 'Solana Network - Coming Soon'
      };
      
      // Add crypto payment service status if available
      if (cryptoPaymentService) {
        try {
          status.cryptoPayment = {
            status: 'Active',
            availableCurrencies: cryptoPaymentService.getAvailableCurrencies ? 
              cryptoPaymentService.getAvailableCurrencies() : [],
            providers: cryptoPaymentService.getProviderStatuses ? 
              cryptoPaymentService.getProviderStatuses() : 
              { polygon: { available: true }, ethereum: { available: true } }
          };
        } catch (err) {
          status.cryptoPayment = { 
            status: 'Error', 
            error: 'Failed to get crypto payment status'
          };
        }
      } else {
        status.cryptoPayment = { status: 'Service Unavailable' };
      }
      
      res.json(status);
    } catch (error) {
      console.error('Error getting blockchain status:', error);
      res.status(500).json({ 
        timestamp: new Date().toISOString(),
        error: 'Failed to get blockchain status'
      });
    }
  });
  

  // Get categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  // Get merchants
  app.get("/api/merchants", async (req, res) => {
    try {
      const merchants = await storage.getMerchants();
      res.json(merchants);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch merchants" });
    }
  });

  // Get all receipts for a user
  app.get("/api/receipts", async (req, res) => {
    try {
      // For demo purposes, always use user ID 1
      const userId = 1;
      const receipts = await storage.getReceipts(userId);
      res.json(receipts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch receipts" });
    }
  });

  // Get recent receipts with limit
  app.get("/api/receipts/recent", async (req, res) => {
    try {
      // For demo purposes, always use user ID 1
      const userId = 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 3;
      const receipts = await storage.getRecentReceipts(userId, limit);
      res.json(receipts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recent receipts" });
    }
  });

  // Get full receipt by ID
  app.get("/api/receipts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const receipt = await storage.getFullReceipt(id);
      
      if (!receipt) {
        return res.status(404).json({ message: "Receipt not found" });
      }
      
      res.json(receipt);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch receipt" });
    }
  });

  // Create new receipt
  app.post("/api/receipts", async (req, res) => {
    try {
      // For demo purposes, always use user ID 1
      const userId = 1;
      const { merchantId, categoryId, date, subtotal, tax, total, items } = req.body;
      
      // Create receipt
      const receipt = await storage.createReceipt({
        userId,
        merchantId,
        categoryId,
        date: new Date(date),
        subtotal,
        tax,
        total,
        blockchainTxHash: undefined,
        blockchainVerified: false,
        blockNumber: undefined,
        nftTokenId: undefined
      });
      
      // Add items
      if (items && Array.isArray(items)) {
        for (const item of items) {
          await storage.createReceiptItem({
            receiptId: receipt.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity || 1
          });
        }
      }
      
      // Update spending stats
      await storage.createOrUpdateSpendingStat({
        userId,
        month: new Date(date).getMonth() + 1, // JavaScript months are 0-indexed
        year: new Date(date).getFullYear(),
        categoryId,
        amount: total
      });
      
      // Simulate blockchain processing
      setTimeout(async () => {
        // Generate fake blockchain data
        const txHash = `0x${Math.random().toString(16).substring(2, 42)}`;
        const blockNumber = Math.floor(14000000 + Math.random() * 1000000);
        const nftTokenId = `NFT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        
        // Update receipt with blockchain data
        await storage.updateReceipt(receipt.id, {
          blockchainTxHash: txHash,
          blockchainVerified: true,
          blockNumber,
          nftTokenId
        });
      }, 3000);
      
      res.status(201).json(receipt);
    } catch (error) {
      res.status(500).json({ message: "Failed to create receipt" });
    }
  });

  // Get spending stats by month and year
  app.get("/api/stats/:year/:month", async (req, res) => {
    try {
      // For demo purposes, always use user ID 1
      const userId = 1;
      const year = parseInt(req.params.year);
      const month = parseInt(req.params.month);
      
      const stats = await storage.getSpendingStatsByMonth(userId, month, year);
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch spending stats" });
    }
  });

  // Get category breakdown for a month and year
  app.get("/api/stats/:year/:month/breakdown", async (req, res) => {
    try {
      // For demo purposes, always use user ID 1
      const userId = 1;
      const year = parseInt(req.params.year);
      const month = parseInt(req.params.month);
      
      const breakdown = await storage.getCategoryBreakdown(userId, month, year);
      res.json(breakdown);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category breakdown" });
    }
  });

  // Get monthly spending for a year
  app.get("/api/stats/:year/monthly", async (req, res) => {
    try {
      // For demo purposes, always use user ID 1
      const userId = 1;
      const year = parseInt(req.params.year);
      
      const monthlySpending = await storage.getMonthlySpending(userId, year);
      res.json(monthlySpending);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch monthly spending" });
    }
  });

  // Mount NFT Pool routes
  app.use('/api/nfts', nftPoolRoutes);
  
  // Mount unified upload-and-mint route
  app.use('/api/upload-and-mint', uploadAndMintRoutes);

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
