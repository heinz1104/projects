import { Box, Grid, Typography, Paper } from "@mui/material";

const menu = [
  {name: 'မုန့်ဟင်းခါး'},
  {name: 'နန်းကြီးသုပ်'},
  {name: 'ရှမ်းခေါက်ဆွဲ'},
  {name: 'ထမင်းကြော်'},
  {name: 'အုန်းနို့ခေါက်ဆွဲ'},
  {name: 'ဆီချက်ခေါက်ဆွဲ'},
  {name: 'ခေါက်ဆွဲကြော်'},
  {name: 'နံပြားထောပတ်သုပ်'},
  {name: 'ကြက်သားပလာတာ'},
  {name: 'ထမင်းသုပ်'},
]

export default function App() {
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
                elevation={2}
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                    color: 'primary.main'
                  }
                }}
              >
                <Typography variant="body1" fontWeight="medium">
                  {item.name}
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
        
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            No items added yet
          </Typography>
        </Box>
        
        <Box sx={{ borderTop: '2px solid #eee', pt: 2, mt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h6">0Ks</Typography>
          </Box>
        </Box>
      </Paper>
      
    </Box>
  )
}
