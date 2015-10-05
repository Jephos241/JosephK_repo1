# Taewoo Kim Program #1
# Created 9/9/2015
# Program that takes a website URL from a text document and 
# saves the images into the current directory
# Thanks to Stackoverflow for providing guidance

# import the required modules
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
import requests
import shutil
import urllib

# Part 1 
# Goes to the URL with the images you wish to download, then finds each 
# image url and saves them into a text file called pages

driver = webdriver.Firefox()
driver.set_page_load_timeout(15)

file_open1 = open("URL.txt", "r")

for line in file_open1:
	sitename = line		
	
file_open1.close()

try:
    driver.get(sitename)
except TimeoutException:
    pass

soup2 = BeautifulSoup(driver.page_source, 'html.parser')
divImage = soup2.find('div', {"id": "divImage"})

driver.close()

text_file = open("pages.txt", "w")

for img in divImage.findAll('img'):
	url = img["src"] + "\n"
	print url
	text_file.write(url) 
	
text_file.close()


# Part 2 
# Open pages.text and read through each image's url
# and save each image into directory as jpeg
	
file_open = open("pages.txt", "r")

array = []
for line in file_open:
	array.append(line)
		
i = 0
while i < 50:
	url = array[i]
 	response = requests.get(url, stream=True)
	with open('page%i.jpg' %i, 'wb') as out_file:
		shutil.copyfileobj(response.raw, out_file)
	del response
	i += 1
	
file_open.close()