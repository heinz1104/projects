import { useState } from "react";
import { Box, Grid, Typography, Paper, Stack } from "@mui/material";

const menu = [
  {name: 'မုန့်ဟင်းခါး', price: 1500},
  {name: 'နန်းကြီးသုပ်', price: 2000},
  {name: 'ရှမ်းခေါက်ဆွဲ', price: 2000},
  {name: 'ထမင်းကြော်', price: 2500},
  {name: 'အုန်းနို့ခေါက်ဆွဲ', price: 2000},
  {name: 'ဆီချက်ခေါက်ဆွဲ', price: 1500},
  {name: 'ခေါက်ဆွဲကြော်', price: 2500},
  {name: 'နံပြားထောပတ်သုပ်', price: 1000},
  {name: 'ကြက်သားပလာတာ', price: 2500},
  {name: 'ထမင်းသုပ်', price: 1500},
]

export default function App() {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((i) => i.name === item.name);
      if (existingItem) {
        return prevOrder.map((i) => 
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevOrder, { ...item, quantity: 1 }];
    });
  };

  const removeFromOrder = (itemName) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((i) => i.name === itemName);
      if (existingItem.quantity > 1) {
        return prevOrder.map((i) => 
          i.name === itemName ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prevOrder.filter((i) => i.name !== itemName);
    });
  };

  const total = order.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Box sx={{ display: 'flex', height: '100vh', p: 2, gap: 2, bgcolor: '#f5f5f5' }}>
      
      {/* Left Side: Menu Items */}
      <Box sx={{ flex: 2, overflowY: 'auto', p: 1 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#333' }}>
          Menu Options
        </Typography>
        <Grid container spacing={2}>
          {menu.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Paper 
                onClick={() => addToOrder(item)}
                elevation={2}
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                    color: 'primary.main',
                    borderColor: 'primary.main'
                  }
                }}
              >
                <Typography variant="body1" fontWeight="medium">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price.toLocaleString()} Ks
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Right Side: Order Box */}
      <Paper 
        elevation={3} 
        sx={{ 
          flex: 1, 
          p: 3, 
          borderRadius: '16px', 
          display: 'flex', 
          flexDirection: 'column',
          height: 'calc(100vh - 32px)' // account for padding
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ borderBottom: '2px solid #eee', pb: 1, mb: 2 }}>
          Current Order
        </Typography>
        
        <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
          {order.length === 0 ? (
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                No items added yet
              </Typography>
            </Box>
          ) : (
            <Stack spacing={2}>
              {order.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5, bgcolor: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' }}>
                  <Box>
                    <Typography variant="body1" fontWeight="medium">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{(item.price * item.quantity).toLocaleString()} Ks</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box 
                      onClick={() => removeFromOrder(item.name)}
                      sx={{ cursor: 'pointer', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#ffebee', color: '#c62828', borderRadius: '50%', '&:hover': { bgcolor: '#ffcdd2' }, userSelect: 'none' }}
                    >
                      -
                    </Box>
                    <Typography variant="body1" fontWeight="bold" sx={{ minWidth: '20px', textAlign: 'center' }}>{item.quantity}</Typography>
                    <Box 
                      onClick={() => addToOrder(item)}
                      sx={{ cursor: 'pointer', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#e8f5e9', color: '#2e7d32', borderRadius: '50%', '&:hover': { bgcolor: '#c8e6c9' }, userSelect: 'none' }}
                    >
                      +
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
          )}
        </Box>
        
        <Box sx={{ borderTop: '2px solid #eee', pt: 2, mt: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6" fontWeight="bold">Total:</Typography>
            <Typography variant="h6" fontWeight="bold" color="primary.main">{total.toLocaleString()} Ks</Typography>
          </Box>
        </Box>
      </Paper>
      
    </Box>
  )
}
