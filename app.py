import flask
from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)
connection = sqlite3.connect('portfolio.db')
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS profile(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    profession TEXT,
    about TEXT)""")

cursor.execute("""CREATE TABLE IF NOT EXISTS projects(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT)""")

cursor.execute("""INSERT INTO profile(name, profession,about)
               VALUES(?,?,?)""", ("Arzum Akbarli", "Full-Stack Developer", "I enjoy Software development using HTML, CSS, JavaScript. I use Java for Back-End Development." ))
               
projects = [('Portfolio Website', 'Personal Portfolio Page'),
           ('RentCar Website', 'Quick car renting available'),
            ('BookReader Website', 'Downloading e-books online')]             

cursor.executemany("""INSERT INTO projects(title, description) VALUES(?,?)""", projects)

connection.commit()
connection.close()


@app.route("/")
def index():
    connection = sqlite3.connect('portfolio.db')
    connection.row_factory = sqlite3.Row
    cursor = connection.cursor()
    
    profile = cursor.execute("SELECT * FROM profile WHERE id=1 LIMIT 1").fetchone()
    
    projects = cursor.execute("SELECT * FROM projects LIMIT 3").fetchall()
    
    connection.close()
    return render_template('index.html', profile = profile, projects = projects)

@app.route("/about")
def about():
    connection = sqlite3.connect('portfolio.db')
    connection.row_factory = sqlite3.Row
    cursor = connection.cursor()
    
    about = cursor.execute("SELECT about FROM profile WHERE id=1").fetchone()
    
    connection.close()
    return render_template('about.html', profile = about)

@app.route("/projects")
def projects():
    connection = sqlite3.connect('portfolio.db')
    connection.row_factory = sqlite3.Row
    cursor = connection.cursor()
    
    projects = cursor.execute("SELECT * FROM projects LIMIT 3").fetchall()
    
    connection.close()
    return render_template('projects.html', projects = projects)

app.run(debug=True)

