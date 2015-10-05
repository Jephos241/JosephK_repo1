# # Topics
#
# * modules
# * strings
#
# # Pig Latin
#
# Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.
#
# Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.
#
# Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word.
#
# (There are a few more rules for edge cases, and there are regional variants too, but that should be enough to understand the tests.)
#
# See <http://en.wikipedia.org/wiki/Pig_latin> for more details.
#
#

def translate(words = [])	
	array = words.split(" ")
	
	i = 0 
	
	while i < array.length
	word = array[i]
	######
	
	# first letter vowel or else
	if (word[0] == 'a' || word[0] == 'e' || word[0] == 'i'|| word[0] == 'o' || word[0] == 'u')
		word << "ay"
	
	elsif (word[0] == 'q' && word[1] == 'u')
		word << word[0]
		word << word[1]
		word << "ay"
		word[0] = ""
		word[0] = ""
	
	# first letter is consonant
	else
		# second letter vowel or else
		if (word[1] == 'a' || word[1] == 'e' || word[1] == 'i'|| word[1] == 'o' || word[1] == 'u')
			word << word[0]
			word << "ay"
			word[0] = ""
			
		# second letter is consonant
		elsif (word[1] == 'q' && word[2] == 'u')
			word << word[0]
			word << word[1]
			word << word[2]
			word << "ay"
			word[0] = ""
			word[0] = ""
			word[0] = ""
			
		else 
			# third letter is vowel
			if (word[2] == 'a' || word[2] == 'e' || word[2] == 'i'|| word[2] == 'o' || word[2] == 'u')
				word << word[0]
				word << word[1]
				word << "ay"
				word[0] = ""
				word[0] = ""
			
			# third letter is consonant
			else
				# fourth letter is a vowel
				if (word[3] == 'a' || word[3] == 'e' || word[3] == 'i' || word[3] == 'o' || word[3] == 'u' )
					word << word[0]
					word << word[1]
					word << word[2]
					word << "ay"
					word[0] = ""
					word[0] = ""
					word[0] = ""
				end
			end
		end
	end
	
	i = i + 1
	#####
	end
	
	phrase = array.join(" ")
	
	return phrase
end

require "pig_latin"

describe "#translate" do

  it "translates a word beginning with a vowel" do
    s = translate("apple")
    s.should == "appleay"
  end

  it "translates a word beginning with a consonant" do
    s = translate("banana")
    s.should == "ananabay"
  end

  it "translates a word beginning with two consonants" do
    s = translate("cherry")
    s.should == "errychay"
  end

  it "translates two words" do
    s = translate("eat pie")
    s.should == "eatay iepay"
  end

  it "translates a word beginning with three consonants" do
    translate("three").should == "eethray"
  end

  it "counts 'sch' as a single phoneme" do
    s = translate("school")
    s.should == "oolschay"
  end

  it "counts 'qu' as a single phoneme" do
    s = translate("quiet")
    s.should == "ietquay"
  end

  it "counts 'qu' as a consonant even when it's preceded by a consonant" do
    s = translate("square")
    s.should == "aresquay"
  end

  it "translates many words" do
    s = translate("the quick brown fox")
    s.should == "ethay ickquay ownbray oxfay"
  end

  # Test-driving bonus:
  # * write a test asserting that capitalized words are still capitalized (but with a different initial capital letter, of course)
  # * retain the punctuation from the original phrase

end
