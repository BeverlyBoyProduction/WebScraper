import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# Replace with a list of Instagram links you want to open
links = ["https://www.instagram.com/instagram/", "https://www.instagram.com/busskr/"]

# Start a web browser
driver = webdriver.Chrome()

# Iterate through the list of links
for link in links:
  # Open the link
  driver.get(link)

  # Wait for the page to load
  time.sleep(5)

  # Click the "Follow" button
  follow_button = driver.find_element(by=By.CSS_SELECTOR, value="button._acan")
  follow_button.click()

# Close the browser
driver.close()
