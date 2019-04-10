import pymorphy2

def create_words(list_filename):
    f = open(list_filename, "r", encoding = "UTF-8")
    words = []
    morph = pymorphy2.MorphAnalyzer()
    lines = f.read().split()
    for line in lines:
        word1 = line.lower()
        word2 = morph.parse(word1)[0].inflect({'accs'}).word
        words.append([word1, word2])
    return words

def write_words(words, words_filename):
    f = open(words_filename, "w+", encoding = "UTF-8")
    f.write("const words = [\n")

    for pair in words:
        f.write("\t[\"" + pair[0] +  "\", \"" + pair[1] + "\"],\n")

    f.write("]")

if __name__ == "__main__":
    words = create_words("list.txt")
    write_words(words, "words.js")