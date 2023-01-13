from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Replace the URL with the YouTube video you want to watch
url = "https://www.youtube.com/watch?v=Fc6hpAxBSC0"

# Create a new instance of the Chrome driver
driver = webdriver.Chrome()

# Navigate to the YouTube video
driver.get(url)

# Wait for the video player to be loaded
wait = WebDriverWait(driver, 10)
video_player = wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'html5-video-player')))

# Wait for the video to finish playing
wait.until(EC.staleness_of(video_player))

# Close the browser window
driver.close()
