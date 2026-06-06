from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return """
    <h1>ELORA</h1>
    <p>Fashion Accessories by Jap Ajooni Kour & Mannat Kohli</p>
    <ul>
        <li>Jewelry</li>
        <li>Scarves</li>
        <li>Hair Accessories</li>
        <li>Nails</li>
    </ul>
    """

if __name__ == "__main__":
    app.run()
